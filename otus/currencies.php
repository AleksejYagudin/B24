<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("11");

$APPLICATION->IncludeComponent(
    "otus.learn:currencies",
    "",
    Array()
);

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");