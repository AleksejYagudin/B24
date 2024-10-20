<?php
namespace Otus\Logger;

use Bitrix\Main\Diag\ExceptionHandlerFormatter;
use \Bitrix\Main\Diag\FileExceptionHandlerLog;

class MyLog extends FileExceptionHandlerLog
{
    /**
     * @param \Throwable $exception
     * @param int $logType
     */
    public function write($exception, $logType)
    {
        $text = ExceptionHandlerFormatter::format($exception, false, 0);

        $context = [
            'type' => static::logTypeToString($logType),
        ];

        $logLevel = static::logTypeToLevel($logType);

        $myText = 'OTUS';

        $message = "{$myText} - {date} - Host: {host} - {type} -{$text}\n";

        $this->logger->log($logLevel, $message, $context);

    }

}