<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
use Bitrix\Main\Loader;
use Otus\Crm\Entity\CrmCustomTable;

Loader::requireModule('otus.crm');

$item = CrmCustomTable::createObject();
$item->setEntityTypeId(1);
$item->setEntityId(1);
$item->setTextField('Строка для Лида с ID 1');
$item->setIntegerField(11);
$item->save();

$item = CrmCustomTable::createObject();
$item->setEntityTypeId(1);
$item->setEntityId(1);
$item->setTextField('Строка для Лида с ID 1');
$item->setIntegerField(22);
$item->save();

$item = CrmCustomTable::createObject();
$item->setEntityTypeId(1);
$item->setEntityId(1);
$item->setTextField('Строка для Лида с ID 1');
$item->setIntegerField(33);
$item->save();

$item = CrmCustomTable::createObject();
$item->setEntityTypeId(1);
$item->setEntityId(1);
$item->setTextField('Строка для Лида с ID 1');
$item->setIntegerField(44);
$item->save();
echo 'ЛИД -> ОК1';
echo '<br>';


$item = CrmCustomTable::createObject();
$item->setEntityTypeId(2);
$item->setEntityId(3);
$item->setTextField('Строка для Сделки с ID 3');
$item->setIntegerField(55);
$item->save();

$item = CrmCustomTable::createObject();
$item->setEntityTypeId(2);
$item->setEntityId(3);
$item->setTextField('Строка для Сделки с ID 3');
$item->setIntegerField(66);
$item->save();

echo 'СДЕЛКА -> OK2';
echo '<br>';

$item = CrmCustomTable::createObject();
$item->setEntityTypeId(3);
$item->setEntityId(3);
$item->setTextField('Строка для Контакта с ID 3');
$item->setIntegerField(77);
$item->save();

$item = CrmCustomTable::createObject();
$item->setEntityTypeId(3);
$item->setEntityId(4);
$item->setTextField('Строка для Контакта с ID 4');
$item->setIntegerField(88);
$item->save();

echo 'Контакт -> OK3';
echo '<br>';