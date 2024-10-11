<?php
return [
	'extensions' => [
		'event-emitter',
		'helpers/component',
		'layout/ui/context-menu',
		'layout/ui/empty-screen',
		'layout/ui/floating-button',
		'layout/ui/product-grid',
		'layout/ui/product-grid/model',
		'layout/ui/product-grid/services/barcode-scanner',
		'alert',
		'notify',
		'rest',
		'selector/widget/factory',
		'qrauth/utils',
		'utils',
		'utils/error-notifier',
		'utils/object',
		'catalog:barcode-scanner',
		'catalog:store/document-type',
		'catalog:store/product-card',
		'catalog:store/sku-selector',

		'catalog:store/product-list/model',
		'catalog:store/product-list/menu/add-product-menu',
		'catalog:store/product-list/services/currency-converter',
		'catalog:store/product-list/services/product-details-adapter',
		'catalog:store/product-list/services/product-model-loader',
		'catalog:store/product-list/services/product-selector-adapter',
		'catalog:store/product-list/services/wizard-adapter',

		'analytics-label',
	],
];
