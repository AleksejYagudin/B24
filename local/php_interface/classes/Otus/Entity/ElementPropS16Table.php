<?php

namespace Otus\Entity;

use Bitrix\Main\Localization\Loc;
use Bitrix\Main\ORM\Data\DataManager;
use Bitrix\Main\ORM\Fields\IntegerField;
use Bitrix\Main\ORM\Fields\TextField;

class ElementPropS16Table extends DataManager
{
    /**
     * Returns DB table name for entity.
     *
     * @return string
     */
    public static function getTableName()
    {
        return 'b_iblock_element_prop_s16';
    }

    /**
     * Returns entity map definition.
     *
     * @return array
     */
    public static function getMap()
    {
        return [
            'IBLOCK_ELEMENT_ID' => (new IntegerField('IBLOCK_ELEMENT_ID',
                []
            ))->configureTitle(Loc::getMessage('ELEMENT_PROP_S16_ENTITY_IBLOCK_ELEMENT_ID_FIELD'))
                ->configurePrimary(true)
            ,
            'PROPERTY_64' => (new TextField('PROPERTY_64',
                []
            ))->configureTitle(Loc::getMessage('ELEMENT_PROP_S16_ENTITY_PROPERTY_64_FIELD'))
            ,
            'PROPERTY_65' => (new TextField('PROPERTY_65',
                []
            ))->configureTitle(Loc::getMessage('ELEMENT_PROP_S16_ENTITY_PROPERTY_65_FIELD'))
            ,
        ];
    }
}