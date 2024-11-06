<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Localization\Loc;

$arComponentDescription = [
    "NAME" =>  Loc::getMessage("OTUS_COMPONENT_CURRENCIES_NAME"),
    "DESCRIPTION" => Loc::getMessage("OTUS_COMPONENT_CURRENCIES_DESCRIPTION"),
    "COMPLEX" => "N",
    "PATH" => [
        "ID" => Loc::getMessage("OTUS_COMPONENT_CURRENCIES_ID"),
        "NAME" => Loc::getMessage("OTUS_COMPONENT_CURRENCIES_DIRECTORY_NAME"),
    ],
];