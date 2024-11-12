<?php
namespace Otus\Crm;

use Bitrix\Main\ORM\Query\Filter\ConditionTree;

final class Filter
{
    public function __construct(
        public readonly ?int $entityTypeId,
        public readonly ?int $entityId,
    ) {
    }

    public function toCriteria(): ConditionTree
    {
        $criteria = new ConditionTree();
        if (isset($this->entityTypeId) && isset($this->entityId)) {
            $criteria->whereIn('ENTITY_TYPE_ID', $this->entityTypeId);
            $criteria->whereIn('ENTITY_ID', $this->entityId);
        }
        return $criteria;
    }
}