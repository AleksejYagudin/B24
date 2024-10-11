{"version":3,"file":"extension.map.js","names":["require","extension","jn","Loc","UsersSettings","constructor","this","values","Application","storage","getObject","isBetaActive","providerId","providerTitle","getMessage","providerSubtitle","isBetaAvailablePromise","checkIsBetaAvailable","isBetaActivePromise","checkAjaxActive","async","section","createBetaForm","options","filter","Boolean","hasOptions","length","getProviderId","getProviderTitle","getProviderSubtitle","Promise","resolve","BX","ajax","runAction","then","result","data","catch","isBetaAvailable","setBoolean","intranetBetaOption","betaActiveSwitch","createSwitchItem","createSection","valueName","action","setObject","onSettingsProviderButtonTap","drawForm","form","getForm","provider","openForm","compile","getId","switchId","textCode","isActive","testId","formSwitch","FormItem","create","FormItemType","SWITCH","setValue","setTestId","Form","addSections","formId","formItems","sectionNameCode","option","FormSection","addItems","setAjaxItemValue","name","params","actions","value","id","clearCache","relogin","console","error","setFormItemValue","onSettingsProviderValueChanged","item","sectionId","sectionCode","setSettingsProvider","usersSettingsManager","addCustomEvent","UsersSettingsProvider","SettingsProvider","onButtonTap","onValueChanged","enableInMenu","getBoolean","initOptions"],"sources":["extension.js"],"mappings":"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"}