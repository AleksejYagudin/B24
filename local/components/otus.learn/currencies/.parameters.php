<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Currency\CurrencyTable;
use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;

if( !Loader::includeModule("currency") ) {
    throw new \Exception(Loc::getMessage("OTUS_COMPONENT_SETTINGS_ERROR"));
}


$arIBlockType = CIBlockParameters::GetIBlockTypes();
$currencyRaw = CurrencyTable::query()
    ->setSelect(['CURRENCY', 'CURRENCY_FULL_NAME' => 'CURRENCY_LANG.FULL_NAME'])
    ->registerRuntimeField(new Bitrix\Main\Entity\ReferenceField(
        "CURRENCY_LANG",
        "\Bitrix\Currency\CurrencyLangTable",
        ["=this.CURRENCY" => "ref.CURRENCY"]
    ))
    ->fetchAll();


$currencyType['Empty'] = Loc::getMessage("OTUS_COMPONENT_SETTINGS_EMPTY_CURRENCIES");
foreach ($currencyRaw as $key => $arItem) {
    $currencyType[$arItem['CURRENCY']] = '['.$arItem['CURRENCY'].'] '.$arItem['CURRENCY_FULL_NAME'];
}

$arComponentParameters = [
    "GROUPS" => [
        "SETTINGS" => [
            "NAME" => Loc::getMessage("OTUS_COMPONENT_SETTINGS_GROUP"),
            "SORT" => 550,
        ],
    ],
    "PARAMETERS" => [
        "CURRENCIES_TYPE" => [
            "PARENT" => "SETTINGS",
            "NAME" => Loc::getMessage("OTUS_COMPONENT_SETTINGS_PARENT_NAME"),
            "TYPE" => "LIST",
            "VALUES" => $currencyType,
        ],
    ]
];