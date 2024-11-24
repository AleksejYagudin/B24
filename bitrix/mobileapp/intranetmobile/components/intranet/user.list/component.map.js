{"version":3,"file":"component.map.js","names":["require","ext","jn","selectWholeUserById","observeListChange","usersUpserted","intranetUsersUpserted","usersAdded","intranetUsersAdded","batchActions","store","dispatch","makeLibraryImagePath","downloadImages","Color","Component","Indent","AnalyticsEvent","Loc","TypeGenerator","StatefulList","SearchLayout","StatusBlock","Box","ProfileView","UserListSorting","UserListMoreMenu","UserListFilter","DepartmentButton","ListItemType","ListItemsFactory","openIntranetInviteWidget","isAndroid","Application","getPlatform","UserList","LayoutComponent","constructor","props","super","this","stateFulListRef","userListFilter","presetId","presetType","default","department","defaultDepartment","search","layout","id","cacheId","env","userId","getPresetId","searchDataAction","searchDataActionParams","onSearch","onCancel","sorting","type","types","WORK_DEPARTMENT","isASC","moreMenu","getType","getOrder","onSelectSorting","state","order","getDefaultDepartment","scrollOffset","Animated","newCalculatedValue2D","getValue2","diffClampWithConfig","departmentTop","M","toNumber","direction","option","onMomentumScrollEnd","initialValue","departmentTopValue","getValue","dY","scrollBy","x","y","animated","duration","onScrollEndDrag","scrollEndTimer","setTimeout","onMomentumScrollBegin","clearTimeout","componentDidMount","unsubscribeEmployeesObserver","getEmployeesFilter","onVisibleEmployeesChange","prefetchAssets","componentWillUnmount","canInvite","BX","componentParameters","get","setSorting","setType","setSelectedSorting","setState","reload","setDepartment","getDepartment","render","backgroundColor","bgPrimary","View","style","flex","renderList","renderDepartmentButton","testId","showAirStyle","menuButtons","getLayoutMenuButtons","needInitMenu","typeGenerator","generator","generators","bySelectedProperties","properties","callbacks","actions","loadItems","actionParams","filterParams","getSearchParams","sortingParams","actionCallbacks","onItemsLoaded","itemType","USER","itemFactory","itemDetailOpenHandler","openUserDetail","getItemCustomStyles","isShowFloatingButton","onFloatingButtonClick","onPanListHandler","onPanList","getEmptyListComponent","ref","onListRef","sortingConfig","getSortingConfig","showEmptySpaceItem","pull","shouldReloadDynamically","onBeforeItemsRender","onScrollCalculated","contentOffsetWithoutOverscroll","itemsCount","position","top","width","alignItems","paddingHorizontal","paddingLr","onSelect","isSearchActive","isDefault","isEmpty","title","getMessage","description","imageUri","emptyScreen","onRefresh","image","Image","resizeMode","height","svg","uri","getSearchButton","getMenuButton","searchString","getSearchString","presetsIds","company","extranet","fired","invited","waitConfirmation","item","section","row","key","minHeight","XL","items","map","index","showBorder","length","moved","removed","added","created","isLoading","removeEmployees","searchLayoutView","fetchPresets","addOrRestoreEmployees","updateEmployees","removedIds","deleteItem","Promise","resolve","updateItemsData","sortingType","analytics","setSection","parentLayout","onInviteSentHandler","onInviteSuccess","newEmployees","addItemsFromPull","close","responseData","context","users","isCache","usersMainInfo","usersIntranetInfo","push","user","getState","avatarSize100","fullName","link","workPosition","open","imageUrl","encodeURI","name","url","showSearch","show","text","setPresetId","setSearchString","showComponent","currentUserId","Number"],"sources":["component.js"],"mappings":"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"}