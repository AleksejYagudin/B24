<?php
namespace Otus\Crm\Entity;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;

class CrmCustomTable extends DataManager
{
    public static function getTableName(): string
    {
        return 'o_table_for_crm';
    }

    public static function getMap(): array
    {
        return [
            (new IntegerField('ID'))->configurePrimary()->configureAutocomplete(),
            (new IntegerField('ENTITY_TYPE_ID'))->configureRequired(),
            (new IntegerField('ENTITY_ID'))->configureRequired(),
            (new StringField('TEXT_FIELD'))->configureRequired(),
            (new IntegerField('INTEGER_FIELD'))->configureRequired(),
        ];
    }
}