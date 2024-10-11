{"version":3,"file":"extension.map.js","names":["jn","define","require","exports","module","StoreProductRow","ProductGrid","BarcodeScanner","AnalyticsLabel","DocumentType","StoreProductCard","StoreDocumentAddProductMenu","StoreProductCurrencyConverter","StoreProductModelLoader","StoreProductSelectorAdapter","StoreProductListWizardAdapter","clone","confirmDestructiveAction","Loc","StoreProductList","constructor","props","super","this","itemRefs","delayedRefHandlers","initServices","wizardAdapter","root","onUpdate","items","addedRecordId","isFirstStep","setStateWithNotification","sendProductAddedAnalyticsLabel","updateTotal","scrollListToTheEnd","defaultStoreReplacements","config","defaultStore","storeFromId","id","storeToId","storeFrom","storeTo","isProductCreationPermitted","Boolean","permissions","catalog_product_add","isCatalogHidden","isOnecRestrictedByPlan","productSelectorAdapter","iblockId","state","catalog","restrictedProductTypes","restricted_product_types","basePriceId","base_price_id","currency","currency_id","enableCreation","onCreate","productName","openWizard","onSelect","productId","addProductById","barcodeScannerAdapter","barcode","lastSelectedStores","getLastSelectedStores","loadProductModel","then","newItem","products","getItems","push","setTimeout","onAfterProductRefAdd","productRef","showProductDetailsBackdrop","addedProductRef","getId","productModelLoader","currencyConverter","length","lastItem","buildState","map","document","documentCurrencyId","measures","total","totalRows","totalCost","amount","totalTax","taxIncluded","totalDiscount","replacements","addItem","productRow","hasVariations","showSkuSelector","onVariationChanged","getSummary","isEditable","editable","onAddItemButtonClick","showAddProductMenu","confirmRemovingItem","title","description","getMessage","onDestruct","removeItem","filter","item","renderSingleItem","index","ref","handler","onChange","notifyGridChanged","onRemove","getEmptyScreenTitle","getEmptyScreenDescription","documentTypeName","getDocumentTypeName","toUpperCase","type","StoreAdjustment","Arrival","Deduct","Moving","SalesOrders","getDocumentCurrency","forceUpdateSummary","Promise","resolve","reject","calculateTotal","customEventEmitter","emit","count","documentTotal","price","getPriceWithVat","getPurchasePrice","quantity","parseFloat","getAmount","getVatValue","undefined","isVatIncluded","getSummaryComponents","summary","discount","taxes","load","loadedRecordId","recordId","product","getItem","send","event","entity","isNewDocument","productType","getType","menu","onChooseBarcode","open","onChooseDb","openSelector","show","on","eventName","callback","callbackIfMounted","args","mounted","BX","addCustomEvent","postComponentEvent","tabId","onChangeCurrency","convert","nextState","onAddItemButtonLongClick"],"sources":["extension.js"],"mappings":"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"}