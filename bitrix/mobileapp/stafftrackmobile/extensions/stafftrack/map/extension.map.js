{"version":3,"file":"extension.map.js","names":["jn","define","require","exports","module","PureComponent","Color","Corner","Indent","downloadImages","withCurrentDomain","Type","Loc","showToast","outline","alert","Line","Haptics","confirmDefaultAction","Switcher","SwitcherMode","ChipButton","ChipButtonDesign","ChipButtonMode","Text5","Text4","Icon","TextField","LocationMenu","DisabledGeoUserEnum","showDisabledGeoAhaMoment","ShiftAjax","LocationEnum","Analytics","SettingsManager","imagesPath","randomMapImage","Random","getInt","locationList","jnExtensionData","get","isIOS","Application","getPlatform","MapView","constructor","props","super","this","layoutWidget","PageManager","state","mapLoading","readOnly","sendGeo","getDefaultSendGeo","location","OFFICE","getValue","signedGeoImageUrl","signedAddressString","geoImageUrl","addressString","address","customLocationRaw","customLocation","keyboardShow","locationChipRef","locationMenu","textFieldRef","switcherRef","openSelector","bind","onSwitcherClick","handleOnChange","handleOnBlur","handleOnFocus","isStringFilled","isFirstHelpViewed","isUserAdmin","userInfo","isAdmin","isNil","isGeoEnabled","componentDidMount","handleUserGeo","componentDidUpdate","prevProps","prevState","isCustomLocationSelected","focus","render","View","renderMapContent","renderLocationContent","renderMapSkeleton","renderSwitcher","renderLocationImage","renderLocationCustomInput","style","position","justifyContent","alignItems","renderRandomMapImage","renderChip","borderColor","accentMainPrimary","toHex","bgSeparatorPrimary","borderWidth","borderRadius","M","toNumber","marginTop","L","paddingHorizontal","paddingVertical","renderTextField","testId","value","placeholder","fullName","placeholderTextColor","base4","maxLength","onChangeText","onBlur","onFocus","ref","blur","setState","onBlurText","onFocusText","Image","width","height","resizeMode","uri","encodeURI","XL","marginHorizontal","icon","getLocationIconType","design","GREY","BLACK","mode","OUTLINE","dropdown","text","getLocationText","onClick","backgroundColor","bgPrimary","renderMapImage","isGeoMode","renderAddressString","renderPinIcon","svg","content","pinIcon","numberOfLines","ellipsize","getMessage","color","flexDirection","paddingTop","useState","SOLID","checked","marginRight","base3","renderMapImageSkeleton","S","targetElementRef","onItemSelected","code","selectLocationItem","show","REMOTELY","HOME","OUTSIDE","CUSTOM","EARTH","COMPANY","MAP","async","mapRequested","clearTimeout","loaderTimeout","setTimeout","deviceGeoPosition","requestGeoPosition","isObject","message","handleErrorGeoDefinition","handleDisabledGeo","console","error","latitude","longitude","geoInfo","getGeoInfo","device","getLocation","accuracy","data","errors","isArrayFilled","title","description","actionButtonText","onAction","openSettings","notifyWarning","toastMessage","accentMainAlert","notifyFailure","targetRef","type","ADMIN","REGULAR","sendSetupGeo","impactLight","getLocationData","getAddress","getGeoImage"],"sources":["extension.js"],"mappings":"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"}