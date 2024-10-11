<?php

return [
	'extensions' => [
		'type',
		'device/connection',
		'im:messenger/const',
		'im:messenger/lib/logger',
		'im:messenger/lib/smile-manager',
		'im:messenger/lib/params',
		'im:messenger/lib/utils',
		'im:messenger/lib/di/service-locator',
	],
	'bundle' => [
		'./src/dialog',
		'./src/message',
		'./src/date',
		'./src/worker',
		'./src/soft-loader',
		'./src/file',
		'./src/url',
	],
];