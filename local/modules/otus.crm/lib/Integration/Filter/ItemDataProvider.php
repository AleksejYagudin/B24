<?php

namespace Otus\Crm\Integration\Filter;

use Bitrix\Main\UI\Filter\FieldAdapter;

final class ItemDataProvider extends DataProvider
{
    public function __construct(private readonly ItemSettings $settings)
    {
    }

    public function getSettings(): ItemSettings
    {
        return $this->settings;
    }

    public function prepareFieldData($fieldID): ?array
    {
        return  [];
    }

    public function prepareFields(): array
    {
        return [
            'ID' => $this->createField(
                'ID',
                [
                    'name' => 'ID',
                    'type' => FieldAdapter::NUMBER,
                    'default' => true,
                ]
            ),
            'ENTITY_TYPE_ID' => $this->createField(
                'ENTITY_TYPE_ID',
                [
                    'name' => 'ENTITY_TYPE_ID',
                    'type' => FieldAdapter::NUMBER,
                    'default' => true,
                ]
            ),
            'ENTITY_ID' => $this->createField(
                'ENTITY_ID',
                [
                    'name' => 'ENTITY_ID',
                    'type' => FieldAdapter::NUMBER,
                    'default' => true,
                ]
            ),
            'TEXT_FIELD' => $this->createField(
                'TEXT_FIELD',
                [
                    'name' => 'TEXT_FIELD',
                    'type' => FieldAdapter::STRING,
                    'default' => true,
                ]
            ),
            'INTEGER_FIELD' => $this->createField(
                'INTEGER_FIELD',
                [
                    'name' => 'INTEGER_FIELD',
                    'type' => FieldAdapter::NUMBER,
                    'default' => true,
                ]
            ),
        ];
    }
}