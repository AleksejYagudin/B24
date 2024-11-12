<?php

use Bitrix\Main\Application;
use Bitrix\Main\Entity\Base;
use Bitrix\Main\EventManager;
use Bitrix\Main\IO\InvalidPathException;
use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\ModuleManager;
use Otus\Crm\Entity\CrmCustomTable;


Loc::loadMessages(__FILE__);

class otus_crm extends CModule
{
    public $MODULE_ID = 'otus.crm';
    public $MODULE_VERSION;
    public $MODULE_VERSION_DATE;
    public $MODULE_NAME;
    public $MODULE_DESCRIPTION;

    public function __construct()
    {
        $arModuleVersion = [];
        include(__DIR__ . '/version.php');

        $this->MODULE_VERSION = $arModuleVersion['VERSION'];
        $this->MODULE_VERSION_DATE = $arModuleVersion['VERSION_DATE'];
        $this->MODULE_NAME = Loc::getMessage('OTUS_CUSTOM_CRM_NAME');
        $this->MODULE_DESCRIPTION = Loc::getMessage('OTUS_CUSTOM_CRM_DESCRIPTION');

        $this->PARTNER_NAME = Loc::getMessage('OTUS_CUSTOM_CRM_PARTNER_NAME');
        $this->PARTNER_URI = Loc::getMessage('OTUS_CUSTOM_CRM_PARTNER_URI');
    }

    private function getEntities()
    {
        return [
            CrmCustomTable::class
        ];
    }

    public function isVersionD7()
    {
        return version_compare(ModuleManager::getVersion('main'), '20.00.00');
    }

    public function getPath($notDocumentRoot = false)
    {
        if($notDocumentRoot) {
            return str_ireplace(Application::getDocumentRoot(), '', dirname(__DIR__));
        }else{
            return dirname(__DIR__);
        }
    }

    public function DoInstall()
    {
        global $APPLICATION;

        if($this->isVersionD7()) {
            ModuleManager::registerModule($this->MODULE_ID);

            $this->InstallDB();
            $this->InstallFiles();
            $this->InstallEvents();

        }else {
            $APPLICATION->ThrowException(Loc::getMessage('OTUS_CUSTOM_CRM_ERROR'));
        }

    }

    public function InstallDB()
    {
        Loader::includeModule($this->MODULE_ID);

        $entities = $this->getEntities();

        foreach ($entities as $entity) {
            if(!Application::getConnection($entity::getConnectionName())->isTableExists($entity::getTableName())) {
                Base::getInstance($entity)->createDbTable();
            }
        }
    }

    public function InstallFiles()
    {
        $component_path = $this->getPath() . '/install/components';

        if(\Bitrix\Main\IO\Directory::isDirectoryExists($component_path)) {
            CopyDirFiles($component_path, $_SERVER['DOCUMENT_ROOT'] . '/local/components', true, true);
        } else {
            throw new InvalidPathException($component_path);
        }
    }

    public function InstallEvents()
    {

        $eventManager = EventManager::getInstance();
        $eventManager->registerEventHandler(
           'crm',
            'onEntityDetailsTabsInitialized',
            $this->MODULE_ID,
            '\\Otus\\Crm\\CustomTab\\Handlers',
            'setCustomTabs'
        );

        return true;
    }

    public function DoUninstall()
    {
        $this->UnInstallDB();
        $this->UnInstallEvents();

        ModuleManager::unRegisterModule($this->MODULE_ID);
    }

    public function UnInstallDB()
    {
        Loader::includeModule($this->MODULE_ID);
        if(Application::getConnection(CrmCustomTable::getConnectionName())->isTableExists(CrmCustomTable::getTableName())) {
            Application::getConnection()->dropTable(CrmCustomTable::getTableName());
        }

    }

    public function UnInstallEvents()
    {
        $eventManager = EventManager::getInstance();
        $eventManager->unRegisterEventHandler(
            'crm',
            'onEntityDetailsTabsInitialized',
            $this->MODULE_ID,
            '\\Otus\\Crm\\CustomTab\\Handlers',
            'setCustomTabs'
        );

        return true;
    }

}

