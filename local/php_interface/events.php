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

$eventManager->addEventHandler("iblock", "OnAfterIBlockElementUpdate", ['Fields', 'OnAfterIBlockElementUpdateHandler']);
$eventManager->addEventHandler("iblock", "OnAfterIBlockElementDelete", ['Fields', 'OnAfterIBlockElementDeleteHandler']);


class Fields
{
    const IBLOCK_ID = 18;
    protected static $handlerDisallow = false;

    public static function AfterDealAdd(&$arFields)
    {
        $findIblockElement = ElementAppotusTable::getRow([
            'select' => ['ID', 'NAME', 'APP_NUMBER_' => 'APPLICATION'],
            'filter' => ['APP_NUMBER_VALUE' => $arFields['ID']],
        ]);

        if(empty($findIblockElement)) {
            $el = new CIBlockElement;
            $arLoadProductArray = [
                'IBLOCK_ID' => self::IBLOCK_ID,
                'NAME' => 'Сделка с ID: '.$arFields['ID'],
                'PROPERTY_VALUES' => [
                    'APPLICATION' => $arFields['ID'],
                    'SUMM' => $arFields['OPPORTUNITY_ACCOUNT'],
                    'ASSIGNED_BY_ID_OTUS' => $arFields['CREATED_BY_ID']
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


    public static function OnAfterIBlockElementUpdateHandler(&$arFields)
    {
        if (self::$handlerDisallow) {
            return true;
        }

        self::$handlerDisallow = true;

        if($arFields['IBLOCK_ID'] == self::IBLOCK_ID) {
            $propertyCode = ['APPLICATION', 'SUMM', 'ASSIGNED_BY_ID_OTUS'];
            $rsProperty = PropertyTable::getList(array(
                'filter' => array('IBLOCK_ID'=> self::IBLOCK_ID,'ACTIVE'=>'Y', 'CODE' => $propertyCode),
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
}



