<?php

use Bitrix\Crm\DealTable;
use Bitrix\Iblock\Elements\ElementAppotusTable;
use Bitrix\Iblock\PropertyTable;
use Bitrix\Main\EventManager;
use Bitrix\Main\UI\Extension;

Extension::load("otus.timeman");

$eventManager = EventManager::getInstance();
$eventManager->addEventHandlerCompatible("crm", "OnAfterCrmDealAdd", ['Fields', 'AfterDealAdd']);
$eventManager->addEventHandlerCompatible("crm", "OnBeforeCrmDealUpdate", ['Fields', 'BeforeDealUpdate']);
$eventManager->addEventHandlerCompatible("crm", "OnAfterCrmDealDelete", ['Fields', 'AfterDealDelete']);

$eventManager->addEventHandler("iblock", "OnAfterIBlockElementAdd", ['Fields', 'OnAfterIBlockElementAddHandler']);
$eventManager->addEventHandler("iblock", "OnAfterIBlockElementUpdate", ['Fields', 'OnAfterIBlockElementUpdateHandler']);
$eventManager->addEventHandler("iblock", "OnAfterIBlockElementDelete", ['Fields', 'OnAfterIBlockElementDeleteHandler']);


class Fields
{

    protected static $handlerDisallow = false;

    public static function AfterDealAdd(&$arFields)
    {

        if (self::$handlerDisallow) {
            return true;
        }

        self::$handlerDisallow = true;

        $findIblockElement = ElementAppotusTable::getRow([
            'select' => ['ID', 'NAME', 'APP_NUMBER_' => 'APPLICATION'],
            'filter' => ['APP_NUMBER_VALUE' => $arFields['ID']],
        ]);

        if(empty($findIblockElement)) {
            $el = new CIBlockElement;
            $iblockId = self::getIblockId();
            $arLoadProductArray = [
                'IBLOCK_ID' => $iblockId,
                'NAME' => 'Сделка с ID: '.$arFields['ID'],
                'PROPERTY_VALUES' => [
                    'APPLICATION' => $arFields['ID'],
                    'SUMM' => $arFields['OPPORTUNITY_ACCOUNT'],
                    'ASSIGNED_BY_ID_OTUS' => $arFields['ASSIGNED_BY_ID']
                ]
            ];

            if ($newElement = $el->Add($arLoadProductArray)) {
                DealTable::update($arFields['ID'], ['UF_CRM_DEAL_APP' => $newElement]);
            } else {
                throw new \Exception($el->LAST_ERROR);
            }
        }

        return true;
    }

    public static function BeforeDealUpdate(&$arFields)
    {

        if (self::$handlerDisallow) {
            return true;
        }

        self::$handlerDisallow = true;

        $curDataDials = DealTable::getRow([
            'filter' => ['ID' => $arFields['ID']],
            'select' => ['ASSIGNED_BY_ID', 'OPPORTUNITY']
        ]);

        $fieldsForUpdate = [];

        if(isset($arFields['ASSIGNED_BY_ID']) && $arFields['ASSIGNED_BY_ID'] !== $curDataDials['ASSIGNED_BY_ID']) {
            $fieldsForUpdate['ASSIGNED_BY_ID_OTUS'] = $arFields['ASSIGNED_BY_ID'];
        }
        if(isset($arFields['OPPORTUNITY']) && $arFields['OPPORTUNITY'] !== $curDataDials['OPPORTUNITY']) {
            $fieldsForUpdate['SUMM'] = $arFields['OPPORTUNITY'];
        }

        if(!empty($fieldsForUpdate)) {
            $findIblockElementId = ElementAppotusTable::getRow([
                'select' => ['ID', 'APP_NUMBER_' => 'APPLICATION'],
                'filter' => ['APP_NUMBER_VALUE' => $arFields['ID']],
            ]);

            if($findIblockElementId > 0) {
                CIBlockElement::SetPropertyValuesEx($findIblockElementId['ID'], false, $fieldsForUpdate);
            }
        }

        self::$handlerDisallow = false;

        return true;
    }

    public static function AfterDealDelete(&$arFields)
    {

        $findIblockElementId = ElementAppotusTable::getRow([
            'select' => ['ID', 'APP_NUMBER_' => 'APPLICATION'],
            'filter' => ['APP_NUMBER_VALUE' => $arFields],
        ]);

        if($findIblockElementId > 0) {
            CIBlockElement::Delete($findIblockElementId['ID']);
        }

        return true;
    }


    public static function OnAfterIBlockElementAddHandler(&$arFields)
    {

        if (self::$handlerDisallow) {
            return true;
        }

        self::$handlerDisallow = true;

        if($arFields['ID'] > 0) {
            $fieldsIblock = ElementAppotusTable::getByPrimary($arFields['ID'], [
                'select' => ['APPLICATION_' => 'APPLICATION', 'SUMM_' => 'SUMM', 'ASSIGNED_BY_ID_OTUS_' => 'ASSIGNED_BY_ID_OTUS'],
            ])->fetch();

            if((int)$fieldsIblock['APPLICATION_VALUE'] > 0) {
                $findDeal = DealTable::getRow([
                    'filter' => ['ID' => (int)$fieldsIblock['APPLICATION_VALUE']],
                    'select' => ['ID']
                ]);

                if(empty($findDeal)) {
                    $entityFields = [
                        'TITLE'    => 'Новая сделка',
                        'STAGE_ID' => 'NEW',
                        'CURRENCY_ID' => 'RUB',
                        'OPPORTUNITY' => $fieldsIblock['SUMM_VALUE'] ?? '',
                        'ASSIGNED_BY_ID' => $fieldsIblock['ASSIGNED_BY_ID_OTUS_VALUE'] ?? '',
                        'UF_CRM_DEAL_APP' => $arFields['ID']
                    ];

                    $entityObject = new \CCrmDeal();

                    $entityId = $entityObject->Add(
                        $entityFields,
                        $bUpdateSearch = true,
                    );

                    if (!$entityId) {
                        throw new \Exception($entityId->LAST_ERROR);
                    } else {
                        $iblockId = self::getIblockId();
                        CIBlockElement::SetPropertyValuesEx($arFields['ID'], false, ['APPLICATION' => $entityId]);
                    }

                    self::$handlerDisallow = false;
                }
            }
        }
        return true;
    }

    public static function OnAfterIBlockElementUpdateHandler(&$arFields)
    {
        if (self::$handlerDisallow) {
            return true;
        }

        self::$handlerDisallow = true;

        $iblockId = self::getIblockId();

        if($arFields['IBLOCK_ID'] == $iblockId) {
            $propertyCode = ['APPLICATION', 'SUMM', 'ASSIGNED_BY_ID_OTUS'];
            $rsProperty = PropertyTable::getList(array(
                'filter' => array('IBLOCK_ID'=> $iblockId,'ACTIVE'=>'Y', 'CODE' => $propertyCode),
                'select' => ['ID', 'CODE']
            ))->fetchAll();

            $dealFieldsFromIblock = [];

            foreach ($rsProperty as $arItem) {
                if($arItem['CODE'] == 'APPLICATION') {
                    foreach ($arFields['PROPERTY_VALUES'][$arItem['ID']] as $arItem1) {
                        $dealFieldsFromIblock['APPLICATION'] = $arItem1['VALUE'];
                    }
                }elseif (($arItem['CODE'] == 'SUMM')) {
                    foreach ($arFields['PROPERTY_VALUES'][$arItem['ID']] as $arItem2) {
                        $dealFieldsFromIblock['SUMM'] = $arItem2['VALUE'];
                    }
                }elseif (($arItem['CODE'] == 'ASSIGNED_BY_ID_OTUS')) {
                    foreach ($arFields['PROPERTY_VALUES'][$arItem['ID']] as $arItem3) {
                        $dealFieldsFromIblock['ASSIGNED_BY_ID_OTUS'] = $arItem3['VALUE'];
                    }

                }
            }

            if($dealFieldsFromIblock['APPLICATION'] > 0) {
                $deal = DealTable::getRow([
                    'filter' => ['ID' => $dealFieldsFromIblock['APPLICATION']],
                    'select' => ['ASSIGNED_BY_ID', 'OPPORTUNITY']
                ]);

                if(!empty($deal)) {
                    $dealFieldsForUpdate = [];

                    if($deal['OPPORTUNITY'] != $dealFieldsFromIblock['SUMM']) {
                        $dealFieldsForUpdate['OPPORTUNITY'] = $dealFieldsFromIblock['SUMM'];
                    }
                    if ($deal['ASSIGNED_BY_ID'] != $dealFieldsFromIblock['ASSIGNED_BY_ID_OTUS']) {
                        $dealFieldsForUpdate['ASSIGNED_BY_ID'] = $dealFieldsFromIblock['ASSIGNED_BY_ID_OTUS'];
                    }
                }
            }

            if(!empty($dealFieldsForUpdate)) {

                $entityObject = new \CCrmDeal();
                $isUpdateSuccess = $entityObject->Update(
                    $dealFieldsFromIblock['APPLICATION'],
                    $dealFieldsForUpdate,
                    $bCompare = true,
                    $bUpdateSearch = true,
                );

                if(!$isUpdateSuccess) {
                    throw new \Exception($entityObject->LAST_ERROR);
                }

                self::$handlerDisallow = false;
            }
        }
        return true;
    }

    public static function OnAfterIBlockElementDeleteHandler(&$arFields)
    {
        if (self::$handlerDisallow) {
            return true;
        }

        self::$handlerDisallow = true;

        $dealForDelete = DealTable::getRow([
            'filter' => ['UF_CRM_DEAL_APP' =>   $arFields['ID']],
            'select' => ['ID']
        ]);

        if($dealForDelete['ID'] > 0) {
            $entityObject = new \CCrmDeal();
            $entityObject->Delete($dealForDelete['ID']);
        }

        self::$handlerDisallow = false;

        return true;
    }

    protected static function getIblockId(): int
    {
        return ElementAppotusTable::getEntity()->getIblock()->getId();
    }
}