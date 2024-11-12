<?php

use Bitrix\Main\ArgumentException;
use Bitrix\Main\Filter\Field;
use Bitrix\Main\Filter\Filter as FilterService;
use Bitrix\Main\Grid\Options as GridService;
use Bitrix\Main\Loader;
use Otus\Crm\Filter;
use Otus\Crm\Integration\Filter\ItemDataProvider;
use Otus\Crm\Integration\Filter\ItemSettings;
use Otus\Crm\Integration\UI\PageNavigationFactory;
use Otus\Crm\ItemCrm;
use Otus\Crm\ItemService;

defined('B_PROLOG_INCLUDED') || die;

final class CustomTableListComponent extends CBitrixComponent
{
    private const GRID_ID = 'custom-crm-item-grid';
    private readonly ItemService $itemService;
    private readonly PageNavigationFactory $pageNavigationFactory;


    public function __construct(
        ?CBitrixComponent $component = null,
        ?ItemService $itemService = null,
        ?PageNavigationFactory $pageNavigationFactory = null
    ) {
        parent::__construct($component);

        Loader::requireModule('otus.crm');

        $this->itemService = $itemService ?? new ItemService();
        $this->pageNavigationFactory = $pageNavigationFactory ?? new PageNavigationFactory();
    }

    public function executeComponent(): void
    {
        $itemCrmDataProvider = $this->getDataProvider();

        $gridService = new GridService($itemCrmDataProvider->getID());
        $filterService = new FilterService($itemCrmDataProvider->getID(), $itemCrmDataProvider);

        $fields = $filterService->getValue();
        $sort = $gridService->getSorting(['sort' => ['ID' => 'DESC']]);

        $navigationParameters = $gridService->GetNavParams();
        $navigation = $this->pageNavigationFactory->create(
            $navigationParameters['nPageSize'],
            $this->itemService->count()
        );


        $fields['ENTITY_TYPE_ID'] = $this->arParams['ENTITY_TYPE_ID'];
        $fields['ENTITY_ID'] = $this->arParams['ENTITY_ID'];


        $filter = new Filter(
            $fields['ENTITY_TYPE_ID'] ?? null,
            $fields['ENTITY_ID'] ?? null,
        );

        $fragment = $this->itemService->getFragment(
            $filter,
            $sort['sort'],
            $navigation->getPageSize(),
            $navigation->getCurrentPage()
        );

        $visibleColumns = $gridService->GetVisibleColumns();
        if (empty($visibleColumns)) {
            $visibleColumns = $filterService->getDefaultFieldIDs();
            $gridService->SetVisibleColumns($visibleColumns);
        }

        $this->arResult = [
            'grid' => [
                'GRID_ID' => $gridService->getId(),
                'COLUMNS' => array_map(
                    static fn(Field $field): array => [
                        'id' => $field->getId(),
                        'type' => $field->getType(),
                        'name' => $field->getName(),
                        'default' => $field->isDefault(),
                        'sort' => $itemCrmDataProvider->getFieldSortingName($field),
                    ],
                    $filterService->getFields()
                ),
                'ROWS' => $fragment->map(fn(ItemCrm $item): array => [
                    'id' => $item->id,
                    'data' => $this->prepareRowData($item, $visibleColumns)
                ]),
                'NAV_OBJECT' => $navigation,
                'AJAX_MODE' => 'Y',
                'AJAX_OPTION_HISTORY' => 'N',
                'TOTAL_ROWS_COUNT' => $navigation->getRecordCount(),
                'SHOW_PAGESIZE' => true,
                'PAGE_SIZES' => $navigation->getPageSizes(),
            ],
        ];
        $this->includeComponentTemplate();
    }

    private function getDataProvider(): ItemDataProvider
    {
        try {
            return new ItemDataProvider(
                new ItemSettings(CustomTableListComponent::GRID_ID)
            );
        } catch (ArgumentException $e) {
            throw new RuntimeException($e->getMessage(), previous: $e);
        }
    }

    private function prepareRowData(ItemCrm $item, array $visibleColumns): array
    {
        $row = [];
        foreach ($visibleColumns as $column) {
            $row[$column] = match ($column) {
                'ID' => $item->id,
                'ENTITY_TYPE_ID' => $item->entityTypeId,
                'ENTITY_ID' => $item->entityId,
                'TEXT_FIELD' => $item->textField,
                'INTEGER_FIELD' => $item->integerField,
            };
        }

        return $row;
    }
}