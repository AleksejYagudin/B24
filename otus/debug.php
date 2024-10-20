<?php

use Bitrix\Main\Application;
use Bitrix\Main\Diag\Debug;
use Bitrix\Main\Type\DateTime;
use Bitrix\Main\IO\Directory;


$DOCUMENT_ROOT = $_SERVER["DOCUMENT_ROOT"];

define("NO_KEEP_STATISTIC", true);
define("NOT_CHECK_PERMISSIONS",true);
define("BX_CAT_CRON", true);
define('NO_AGENT_CHECK', true);

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

$server = Application::getInstance()->getContext()->getServer()->getRequestScheme();
if($server === 'http') {
    $curDateTime = (new DateTime())->format('d.m.Y H:i:s');
    $pathForLogs = Application::getInstance()->getContext()->getServer()->getDocumentRoot() . DIRECTORY_SEPARATOR . 'otus' . DIRECTORY_SEPARATOR . 'logs';

    if(!Directory::isDirectoryExists($pathForLogs)) {
        echo 'Отсутствует папка для логов!';
    }else {
        $fileName = 'otus' . DIRECTORY_SEPARATOR . 'logs' . DIRECTORY_SEPARATOR . 'log_' . str_replace(['.', ':', ' '], '_', $curDateTime) . '.txt';
        $log = [
            'CUR_DATE_TIME' => $curDateTime,
        ];
        Debug::writeToFile($log, $varName = '', $fileName);
    }
}