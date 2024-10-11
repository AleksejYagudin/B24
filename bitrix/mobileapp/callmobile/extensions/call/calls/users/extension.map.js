{"version":3,"file":"extension.map.js","names":["UserModel","config","this","data","id","BX","prop","getInteger","name","getString","avatar","gender","state","Call","UserState","Idle","talking","getBoolean","cameraState","videoPaused","microphoneState","screenState","floorRequestState","localUser","centralUser","pinned","presenter","order","fieldName","hasOwnProperty","Object","defineProperty","get","_getField","bind","set","_setField","onUpdate","_onUpdateTalking","_onUpdateState","talkingStop","eventEmitter","JNEventEmitter","Event","Changed","prototype","newValue","oldValue","emit","user","Date","getTime","Connected","wasTalkingAgo","Infinity","subscribe","event","handler","on","unsubscribe","off","UserRegistry","users","getArray","_sort","UserAdded","UserChanged","eventName","userId","i","length","push","Error","_onUserChanged","sort","a","b","window"],"sources":["extension.js"],"mappings":"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"}