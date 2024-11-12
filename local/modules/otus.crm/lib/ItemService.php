<?php
namespace Otus\Crm;

use Bitrix\Main\ORM\Query\Filter\ConditionTree;
use Bitrix\Main\SystemException;
use Bitrix\Main\UI\PageNavigation;
use Otus\Crm\Entity\CrmCustomTable;

class ItemService
{
    public function __construct(
    ) {
    }

    /**
     * Подсчитывает общее количество Элементов по заданному фильтру.
     * Используется для корректной работы {@link PageNavigation}.
     *
     * @throws ServiceException
     */
    public function count(): int
    {
        try {
            return CrmCustomTable::query()->queryCountTotal();
        } catch (SystemException $e) {
            throw new ServiceException('Failed to count projects', previous: $e);
        }
    }

    /**
     * Получает фрагмент списка Элементов.
     *
     * Фрагмент по определению не может содержать полный список Элементов, поэтому параметры
     * $size и $pageNumber - обязательные.
     *
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
     *
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

}