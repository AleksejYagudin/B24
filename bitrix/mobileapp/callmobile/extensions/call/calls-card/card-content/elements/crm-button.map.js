{"version":3,"file":"crm-button.map.js","names":["jn","define","require","exports","module","ItemCard","isEmpty","ContextMenu","ENTITIES_COLORS","LEAD","DEAL","CONTACT","COMPANY","DEFAULT_COLOR","SEMITRANSPARENT_COLOR","CrmButton","layoutWidget","crmData","onUiEvent","crmContactName","crmCompanyName","itemCardData","header","sumTitle","deal","BX","message","lead","View","style","flexDirection","marginVertical","alignSelf","opacity","testId","onClick","this","menu","params","showCancelButton","isCustomIconColor","customSection","layout","close","eventName","openLeadEventName","openDealEventName","height","actions","getMenuActions","titleActionsBySectionCode","getTitleActions","titlesBySectionCode","contacts","companies","leads","deals","show","justifyContent","alignItems","paddingHorizontal","Image","width","marginRight","svg","content","icon","crmButton","Text","color","fontSize","fontWeight","text","flexShrink","marginTop","borderRadius","backgroundColor","createLeadEventName","action","iconType","createDealEventName","createContactEventName","createCompanyEventName","isSemitransparent","Boolean","openCompanyEventName","openContactEventName","defaultColor","push","id","title","TITLE","onClickCallback","sectionCode","data","svgIcon","contact","company","leadCreate","dealCreate","contactCreate","companyCreate"],"sources":["crm-button.js"],"mappings":"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"}