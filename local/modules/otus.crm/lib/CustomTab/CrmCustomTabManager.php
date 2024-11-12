<?php

namespace Otus\Crm\CustomTab;

class CrmCustomTabManager
{
    /**
     * CRM права текущего пользователя
     * @var \CCrmPerms
     */
    protected \CCrmPerms $userPermissions;

    public function __construct()
    {
        //$this->userPermissions = \CCrmPerms::GetCurrentUserPermissions();
    }

    /**
     * Получение актуальных вкладок
     * @param int $elementId
     * @param int $entityTypeID
     * @param array $tabs
     * @return array
     */
    public function getActualEntityTab(int $elementId, int $entityTypeID, array $tabs = []): array
    {
        switch ($entityTypeID) {
            case \CCrmOwnerType::Lead:
                $tabs = $this->getActualTabs($tabs, $elementId, \CCrmOwnerType::Lead);
                break;
            case \CCrmOwnerType::Deal:
                $tabs = $this->getActualTabs($tabs, $elementId, \CCrmOwnerType::Deal);
                break;
            case \CCrmOwnerType::Company:
                $tabs = $this->getActualTabs($tabs, $elementId, \CCrmOwnerType::Company);
                break;
            case \CCrmOwnerType::Contact:
                $tabs = $this->getActualTabs($tabs, $elementId, \CCrmOwnerType::Contact);
                break;
        }

        return $tabs;
    }

    /**
     * Получение актуальных вкладок элемента сущности
     * @param array $tabs
     * @param int $elementId
     * @return array
     */
    private function getActualTabs(array $tabs, int $elementId, int $entityTypeId): array
    {

        $tabs[] = [
            'id' => 'custom_item',
            'name' => 'Новая вкладка',
            'enabled' => !empty($elementId),
            'loader' => [
                'serviceUrl' => '/local/components/otus/custom.table.list/lazyload.ajax.php?&site=' . \SITE_ID . '&' . \bitrix_sessid_get(),
                'componentData' => [
                    'template' => '',
                    'params' => [
                        'ENTITY_TYPE_ID' => $entityTypeId,
                        'ENTITY_ID' => $elementId
                    ]
                ]
            ]
        ];

        return $tabs;
    }
}