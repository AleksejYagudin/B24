<?php


defined('B_PROLOG_INCLUDED') || die;


/**
 * @var CMain $APPLICATION
 * @var array $arResult
 */

$APPLICATION->SetTitle('Страница тест');

$APPLICATION->IncludeComponent(
    'bitrix:main.ui.grid',
    '.default',
    $arResult['grid']
);

if (!empty($arParams['AJAX_LOADER'])) { ?>
    <script>
        BX.addCustomEvent('Grid::beforeRequest', function (gridData, argse) {
            if (argse.gridId != '<?=$arResult['grid']['GRID_ID'];?>') {
                return;
            }
            let old = argse.data;

            argse.method = 'POST'
            argse.data = <?= \Bitrix\Main\Web\Json::encode($arParams['AJAX_LOADER']['data']) ?>

            argse.data.params = old;

        });
    </script>

<?php }?>
<script>
    BX.ready(function (){
        let grid = BX.Main.gridManager.getById('custom-crm-item-grid');
        if(grid) {
            grid.instance.baseUrl = '/local/components/otus/custom.table.list/lazyload.ajax.php';
        }
    })

</script>


