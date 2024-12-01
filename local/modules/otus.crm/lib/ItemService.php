<?php
namespace Otus\Crm;

use Bitrix\Main\ORM\Query\Filter\ConditionTree;
use Bitrix\Main\SystemException;
use Bitrix\Main\UI\PageNavigation;
use Bitrix\Main\ArgumentException;
use Bitrix\Main\Localization\Loc;
use Otus\Crm\Entity\CrmCustomTable;

/**
 * Сервис для работы с элементами
 */
class ItemService
{
    /**
     *
     */
    public function __construct(
    ) {
    }

    /**
     * Подсчитывает общее количество Элементов по заданному фильтру.
     * Используется для корректной работы {@link PageNavigation}.
     *
     * @throws ServiceException
     */
    public function count(Filter $filter): int
    {
        try {
            return CrmCustomTable::query()->where($filter->toCriteria())->queryCountTotal();
        } catch (SystemException $e) {
            throw new ServiceException('Failed to count projects', previous: $e);
        }
    }


    /**
     * Получает фрагмент списка Элементов.
     *
     * Фрагмент по определению не может содержать полный список Элементов, поэтому параметры
     * $size и $pageNumber - обязательные.
     * @param Filter $filter
     * @param array $order
     * @param int $size
     * @param int $pageNumber
     * @return Collection
     * @throws ServiceException
     */
    public function getFragment(Filter $filter, array $order, int $size, int $pageNumber): Collection
    {
        if ($size < 0) {
            throw new ServiceException('Page size MUST be a positive integer.');
        }

        $offset = (max($pageNumber, 1) - 1) * $size;

        return $this->findItems($filter->toCriteria(), $order, $size, $offset);
    }


    /**
     * Получение элементов по фильтру
     * @param ConditionTree $criteria
     * @param array $order
     * @param int|null $limit
     * @param int|null $offset
     * @return Collection
     * @throws ServiceException
     */
    private function findItems(
        ConditionTree $criteria,
        array $order,
        ?int $limit = null,
        ?int $offset = null
    ): Collection {
        try {
            $result = CrmCustomTable::query()
                ->setSelect([
                    'ID',
                    'ENTITY_TYPE_ID',
                    'ENTITY_ID',
                    'TEXT_FIELD',
                    'INTEGER_FIELD',
                ])
                ->where($criteria)
                ->setOrder($order)
                ->setLimit($limit)
                ->setOffset($offset)
                ->exec();

            $projects = new Collection();
            foreach ($result->fetchCollection() as $entityObject) {
                $projects->insert(
                    new ItemCrm(
                        $entityObject->getId(),
                        $entityObject->getEntityTypeId(),
                        $entityObject->getEntityId(),
                        $entityObject->getTextField(),
                        $entityObject->getIntegerField(),
                    )
                );
            }

            return $projects;
        } catch (SystemException $e) {
            throw new ServiceException('Failed to find project', previous: $e);
        }
    }


    /**
     * Получение конкретного элемент по идентификатору из БД.
     * @param int $itemId
     * @return ItemCrm
     * @throws NotFoundException
     * @throws ServiceException
     * @throws \Bitrix\Main\ArgumentException
     */
    public function getById(int $itemId): ItemCrm
    {
        $criteria = new ConditionTree();
        try {
            $criteria->where('ID', '=', $itemId);
        } catch (ArgumentException) {
            // Noop, never thrown.
        }

        $item = $this->findItems($criteria, ['ID' => 'DESC']);

        if ($item->isEmpty()) {
            throw new NotFoundException(Loc::getMessage('ITEM_CRM_NOT_FOUNT'));
        }

        return $item->get($itemId);
    }

    /**
     * Создание элемента
     * @param ItemCrm $itemCrm
     * @return ItemCrm
     * @throws ServiceException
     */
    public function create(ItemCrm $itemCrm): ItemCrm
    {
        try {
            $entityObject = CrmCustomTable::createObject()
                ->setEntityTypeId($itemCrm->entityTypeId)
                ->setEntityId($itemCrm->entityId)
                ->setTextField($itemCrm->textField)
                ->setIntegerField($itemCrm->integerField);

            $addResult = $entityObject->save();
        } catch (\Exception $e) {
            throw new ServiceException('Failed to add project', previous: $e);
        }

        if (!$addResult->isSuccess()) {
            throw ServiceException::createFromCollection($addResult->getErrorCollection());
        }

        $itemCrm = $itemCrm->withId($addResult->getId());

        return $itemCrm;
    }


    /**
     * Удаление элемента
     * @param int $id
     * @return void
     * @throws ServiceException
     */
    public function delete(int $id): void
    {
        $findItem = CrmCustomTable::getRow([
            'filter' => ['ID' => $id]
        ]);
        if(!empty($findItem)) {
            try {
                $deleteResult = CrmCustomTable::delete($id);
            } catch (\Exception $e) {
                throw new ServiceException(Loc::getMessage('ITEM_CRM_ERROR_DELETE'), previous: $e);
            }

            if (!$deleteResult->isSuccess()) {
                throw ServiceException::createFromCollection($deleteResult->getErrorCollection());
            }
        } else {
            throw new ServiceException(Loc::getMessage('ITEM_CRM_ERROR_DELETE_EMPTY'));
        }

    }

}