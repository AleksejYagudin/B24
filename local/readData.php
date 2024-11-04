<?php require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

use Otus\Entity\TestTable;
use Bitrix\Main\Entity\ReferenceField;

$res = TestTable::query()
    ->setSelect(['*', 'ELEMENT_' => 'IBLOCK_ELEMENT.*', 'PROPERTY_S', 'PROPERTY_M'])
    ->registerRuntimeField(new ReferenceField(
        "PROPERTY_S",
        "\Otus\Entity\ElementPropS16Table",
        ["=this.ELEMENT_ID" => "ref.IBLOCK_ELEMENT_ID"]
    ))
    ->registerRuntimeField(new ReferenceField(
        "PROPERTY_M",
        "\Otus\Entity\ElementPropM17Table",
        ["=this.ELEMENT_ID" => "ref.IBLOCK_ELEMENT_ID"]
    ))
    ->fetchAll();



echo '<pre>';
print_r($res);
echo '</pre>';