<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("11");

$APPLICATION->IncludeComponent(
    "otus.learn:custom.table.list",
    "",
    Array()
);

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");