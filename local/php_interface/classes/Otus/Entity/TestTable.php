<?php

namespace Otus\Entity;

use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\StringField;
use Bitrix\Main\ORM\Fields\Relations\Reference;
use Bitrix\Main\ORM\Query\Join;
use \Bitrix\Iblock\ElementTable;


final class TestTable extends DataManager
{
    public static function getTableName(): string
    {
        return 'o_test';
    }

    public static function getMap(): array
    {
        return [
            (new IntegerField('ID'))->configurePrimary()->configureAutocomplete(),
            (new StringField('STRING_FIELD'))->configureRequired(),
            (new IntegerField('INTEGER_FIELD'))->configureRequired(false),
            (new IntegerField('IBLOCK_ELEMENT_ID'))->configureRequired(false),
            (new Reference(
                'IBLOCK_ELEMENT',
                ElementTable::class,
                Join::on('this.IBLOCK_ELEMENT_ID', 'ref.ID')
            ))->configureJoinType('inner'),
        ];
    }
}