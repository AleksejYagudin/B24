<?php
defined('B_PROLOG_INCLUDED') || die();
global $APPLICATION;
use Bitrix\Main\Localization\Loc;

$APPLICATION->SetTitle('Валюта');
if(!empty($arResult['CURRENCY_FROM_SETTINGS'])) {
    echo Loc::getMessage('OTUS_COMPONENT_TEMPLATE_CURRENCIES_FROM_SETTINGS') . " [{$arResult['CURRENCY_FROM_SETTINGS']['CURRENCY']}] {$arResult['CURRENCY_FROM_SETTINGS']['CURRENCY_FULL_NAME']} -> {$arResult['CURRENCY_FROM_SETTINGS']['AMOUNT']}";
}else{
    echo Loc::getMessage('OTUS_COMPONENT_TEMPLATE_CURRENCIES_FROM_DB') . " [{$arResult['CURRENCY_FROM_DB']['CURRENCY']}] {$arResult['CURRENCY_FROM_DB']['CURRENCY_FULL_NAME']} -> {$arResult['CURRENCY_FROM_DB']['AMOUNT']} ";
}
