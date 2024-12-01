<?php

namespace Otus\Crm\Integration\Rest;

use Bitrix\Rest\RestException;
use Bitrix\Main\Localization\Loc;
use CRestServer;
use IRestService;
use Otus\Crm\Filter;
use Otus\Crm\ItemCrm;
use Otus\Crm\ItemService;
use Otus\Crm\ServiceException;


Loc::loadMessages(__FILE__);

/**
 * Обработчик Rest запросов
 */
class Service extends IRestService
{
    /**
     * Название Права доступа к Rest методами
     */
    const SCOPE = 'otus.crm.items';
    /**
     * Лимит по умолчанию
     *
     */
    const DEFAULT_LIMIT = 10;

    /**
     * Список допустимых полей при создании элемента
     */
    public const TRACKED_FIELDS = [
        'ENTITY_TYPE_ID',
        'ENTITY_ID',
        'TEXT_FIELD',
        'INTEGER_FIELD',
    ];

    /**
     * @param ItemService $itemService - сервис для работы с элементами
     */
    public function __construct(private readonly ItemService $itemService)
    {
    }

    /**
     * Обрабочик события Rest запросов
     * @return array[]
     */
    public static function onRestServiceBuildDescription(): array
    {
        $service = new Service(new ItemService());

        return [
            self::SCOPE => [
                'item.list' => [
                    'callback' => $service->getList(...)
                ],
                'item.create' => [
                    'callback' => $service->create(...)
                ],
                'item.get' => [
                    'callback' => $service->get(...)
                ],
                'item.delete' => [
                    'callback' => $service->delete(...)
                ]

            ]
        ];

    }

    /**
     * Создание элемента из запроса
     * @param array $parameters
     * @param $navigation
     * @param CRestServer $server
     * @return array
     * @throws RestException
     * @throws ServiceException
     */
    public function create(array $parameters, $navigation, CRestServer $server): array
    {

        $keysFromRequest = array_keys($parameters);
        $diff = array_diff( self::TRACKED_FIELDS, $keysFromRequest);

        if(!empty($diff)) {
            $notDefined = [];
            foreach ($diff as $arItem) {
                $notDefined[] = $arItem;
            }
            throw new RestException(Loc::getMessage('ITEM_REST_ARGUMENTS_NOT_DEFINED').implode(' ', $notDefined), RestException::ERROR_ARGUMENT);
        }

        $empty = [];
        foreach ($parameters as $key => $arItem) {
            if($arItem == '') {
                $empty[] = $key;
            }
        }
        if(!empty($empty)) {
            throw new RestException(Loc::getMessage('ITEM_REST_ARGUMENTS_EMPTY').implode(' ', $empty), RestException::ERROR_ARGUMENT);
        }


        $itemCrm = new ItemCrm(
            $parameters['ID'] ?? null,
            $parameters['ENTITY_TYPE_ID'],
            $parameters['ENTITY_ID'],
            $parameters['TEXT_FIELD'],
            (int)$parameters['INTEGER_FIELD'],
        );

        $newItemCrm = $this->itemService->create($itemCrm);

        return ['ID' => $newItemCrm->id, 'STATUS' => 'OK'];
    }

    /**
     * Получение элемента по ID
     * @param array $parameters
     * @param $navigation
     * @param CRestServer $server
     * @return array
     * @throws RestException
     * @throws ServiceException
     * @throws \Otus\Crm\NotFoundException
     */
    public function get(array $parameters, $navigation, CRestServer $server): array
    {
        if(!isset($parameters['ID'])) {
            throw new RestException(Loc::getMessage("ITEM_REST_ARGUMENT_NOT_DEFINED_ID"), RestException::ERROR_ARGUMENT);
        }

        $itemId = (int) $parameters['ID'];
        if($itemId <= 0) {
            throw new RestException(Loc::getMessage("ITEM_REST_ARGUMENT_NOT_POSITIVE_NUMBER"), RestException::ERROR_ARGUMENT);
        }

        $item = $this->itemService->getById($itemId);
        if($item === null) {
            throw new RestException(Loc::getMessage("ITEM_REST_ITEM_NOT_FOUND"), RestException::ERROR_NOT_FOUND);
        }

        return $this->convertItem($item);

    }

    /**
     * Удаление элемента
     * @param array $parameters
     * @param $navigation
     * @param CRestServer $server
     * @return string[]
     * @throws RestException
     * @throws \Otus\Crm\NotFoundException
     */
    public function delete(array $parameters, $navigation, CRestServer $server): array
    {
        if(!isset($parameters['ID'])) {
            throw new RestException(Loc::getMessage("ITEM_REST_ARGUMENT_NOT_DEFINED_ID"), RestException::ERROR_ARGUMENT);
        }

        $itemId = (int) $parameters['ID'];
        if($itemId <= 0) {
            throw new RestException(Loc::getMessage("ITEM_REST_ARGUMENT_NOT_POSITIVE_NUMBER"), RestException::ERROR_ARGUMENT);
        }
        $this->itemService->delete($itemId);

        return ['STATUS' => 'OK'];
    }

    /**
     * Получение элементов по фильтру
     * @param array $parameters
     * @param $navigation
     * @param CRestServer $server
     * @return array
     * @throws RestException
     * @throws \Otus\Crm\ServiceException
     */
    public function getList(array $parameters, $navigation, CRestServer $server): array
    {

        $filter = $parameters['filter'] ?? [];
        $order = $parameters['order'] ?? ['ID' => 'ASC'];

        $filter = new Filter(
            $filter['ENTITY_TYPE_ID'],
            $filter['ENTITY_ID'],
        );


        $navigationParameters = [];
        $limit = (int)$parameters['navigation']['LIMIT'];
        if($limit > 0) {
            $navigationParameters['limit'] = $limit;
            $navigationParameters['offset'] = 1;
            $pageNumber = (int)($navigationParameters['offset'] / $navigationParameters['limit'] + 1);
        } else {
            $navigationParameters = static::getNavData($navigation, true);
            $pageNumber = (int)($navigationParameters['offset'] / $navigationParameters['limit'] + 1);
        }


        $offset = (int)$parameters['navigation']['OFFSET'];
        if($offset > 0) {
            $pageNumber = $offset;
            if(!$limit) {
                $navigationParameters['limit'] = self::DEFAULT_LIMIT;
            }
        } else {
            $pageNumber = (int)($navigationParameters['offset'] / $navigationParameters['limit'] + 1);
        }

        try {
            $fragment = $this->itemService->getFragment(
                $filter,
                $order,
                $navigationParameters['limit'],
                $pageNumber
            );

            return (array) static::setNavData(
                [
                    'items' => $fragment->map($this->convertItem(...))
                ],
                [
                    'offset' => $navigationParameters['offset'],
                    'count' => $this->itemService->count($filter),
                ]
            );
        } catch (ServiceException $e) {
            throw new RestException($e->getMessage(), previous: $e);
        }

    }

    /**
     * Возврат массива с данными об элементе
     * @param ItemCrm $item
     * @return array
     */
    public function convertItem(ItemCrm $item): array
    {
        return [
            'ID' => $item->id,
            'ENTITY_TYPE_ID' => $item->entityTypeId,
            'ENTITY_ID' => $item->entityId,
            'TEXT_FIELD' => $item->textField,
            'INTEGER_FIELD' => $item->integerField
        ];
    }
}