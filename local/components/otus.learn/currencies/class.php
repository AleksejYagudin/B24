<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Currency\CurrencyTable;
use \Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;

class CurrenciesComponent extends CBitrixComponent
{
    private array $currencies;
    public function __construct(?CBitrixComponent $component = null) {
        parent::__construct($component);
        $this->currencies = [];
    }

    /**
     * Проверка наличия модулей требуемых для работы компонента
     * @return bool
     * @throws Exception
     */
    private function _checkModules() {
        if (!Loader::includeModule('currency')){
            throw new \Exception(Loc::getMessage("OTUS_COMPONENT_SETTINGS_ERROR"));
        }

        return true;
    }

    /**
     * Обертка над глобальной переменной
     * @return CAllMain|CMain
     */
    private function _app() {
        global $APPLICATION;
        return $APPLICATION;
    }

    /**
     * Подготовка параметров компонента
     * @param $arParams
     * @return mixed
     */
    public function onPrepareComponentParams($arParams) {
        if(isset($arParams['CURRENCIES_TYPE']) && $arParams['CURRENCIES_TYPE'] !== 'Empty') {
            $this->currencies = CurrencyTable::query()
                ->setFilter(['CURRENCY' => $arParams['CURRENCIES_TYPE'], 'CURRENCY_LANG.THOUSANDS_VARIANT' => 'B'])
                ->setSelect(['CURRENCY', 'AMOUNT', 'CURRENCY_FULL_NAME' => 'CURRENCY_LANG.FULL_NAME'])
                ->registerRuntimeField(new Bitrix\Main\Entity\ReferenceField(
                    "CURRENCY_LANG",
                    "\Bitrix\Currency\CurrencyLangTable",
                    ["=this.CURRENCY" => "ref.CURRENCY"]
                ))
                ->fetch();
        }
        return $arParams;
    }

    public function executeComponent()
    {
        $this->_checkModules();

        $this->arResult['CURRENCY_FROM_SETTINGS'] = $this->currencies;
        $this->arResult['CURRENCY_FROM_DB'] = $this->getCurrencies();

        $this->includeComponentTemplate();
    }

    private function getCurrencies(): array
    {
       return CurrencyTable::query()
            ->setFilter(['BASE' => 'Y', 'CURRENCY_LANG.THOUSANDS_VARIANT' => 'B'])
            ->setSelect(['CURRENCY', 'AMOUNT', 'CURRENCY_FULL_NAME' => 'CURRENCY_LANG.FULL_NAME'])
            ->registerRuntimeField(new Bitrix\Main\Entity\ReferenceField(
                "CURRENCY_LANG",
                "\Bitrix\Currency\CurrencyLangTable",
                ["=this.CURRENCY" => "ref.CURRENCY"]
            ))
            ->fetch();
    }

}