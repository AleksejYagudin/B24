<?php

namespace Otus\Crm\Integration\Filter;

use Bitrix\Main\Filter\DataProvider as MainDataProvider;
use Bitrix\Main\Filter\Field;
use Bitrix\Main\UI\Filter\FieldAdapter;

abstract class DataProvider extends MainDataProvider
{
    public function prepareFilterValue(array $rawFilterValue): array
    {
        return $rawFilterValue;
    }

    public function getFieldSortingName(Field $field): ?string
    {
        return null;
    }
}