<?php

namespace Otus\Crm\CustomTab;

use Bitrix\Main\Event;
use Bitrix\Main\EventResult;

class Handlers
{
    /**
     * Получение актуальных вкладок элемента CRM
     * @param Event $event
     * @return EventResult
     */
    public static function setCustomTabs(Event $event): EventResult
    {
        $entityId = $event->getParameter('entityID');
        $entityTypeID = $event->getParameter('entityTypeID');
        $tabs = $event->getParameter('tabs');

        $reflection = new \ReflectionClass($event);
        $property = $reflection->getProperty('parameters');
        $property->setAccessible(true);

        $eventParameters = $property->getValue($event);

        $crmCustomTabManager = new CrmCustomTabManager();

        $tabs = $crmCustomTabManager->getActualEntityTab($entityId, $entityTypeID, $tabs);

        // Добавление вкладки с помощью Reflection API
        $eventParameters['tabs'] = $tabs;
        $property->setValue($event, $eventParameters);

        return new EventResult(EventResult::SUCCESS, [
            'tabs' => $tabs,
        ]);
    }
}