{"version":3,"file":"extension.map.js","names":["jn","define","require","exports","module","GO_TO_WEB_BANNER_TYPE","GO_TO_WEB_EDITOR_BANNER_TYPE","SIGNED_BANNER_TYPE","REQUEST_BANNER_TYPE","RESPONSE_BANNER_TYPE","REFUSED_BANNER_TYPE","REFUSED_SELF_BANNER_TYPE","PROCESSING_BANNER_TYPE","REVIEW_SUCCESS_BANNER_TYPE","ERROR_BANNER_TYPE","REQUEST_REVIEW_BANNER_TYPE","SIGNED_BY_ASSIGNEE_BANNER_TYPE","SIGNED_BY_EDITOR_BANNER_TYPE","PROCESSING_WAITING_BANNER_TYPE","ERROR_ACCESS_DENIED_BANNER_TYPE","SignDialog","static","props","title","memberId","role","ComponentHelper","openLayout","name","canOpenInDefault","widgetParams","getWidgetParams","componentParams","backdrop","mediumPositionPercent","hideNavigationBar","forceDismissOnSwipeDown","shouldResizeContent","swipeAllowed","url","isGoskey","type","layoutWidget","bannerConfig","path","component","config","import","then","BannerComponent","layout","showComponent"],"sources":["extension.js"],"mappings":"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"}