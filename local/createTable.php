<?php
use Bitrix\Main\Application;
use Otus\Entity\TestTable;

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

$connection = Application::getInstance()::getConnection();

if(!$connection->isTableExists(TestTable::getTableName())) {
    TestTable::getEntity()->createDbTable();
    echo 'Таблица создана';
} else{
    echo 'Таблица уже создана';
}
