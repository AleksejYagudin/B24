<?php

return [
	'extensions' => [
		'type',
		'date',
		'utils/uuid',
		'utils/object',
		'utils/date',
		'im:chat/utils',
		'im:messenger/const',
		'im:messenger/lib/date-formatter',
		'im:messenger/lib/helper',
		'im:messenger/cache',
		'im:messenger/lib/logger',
		'im:messenger/lib/params',
		'im:messenger/lib/utils',
		'im:messenger/lib/feature',
		'im:messenger/lib/state-manager/vuex-manager/mutation-handlers-waiter',
		'im:messenger/lib/permission-manager',
	],
	'bundle' => [
		'./src/application',
		'./src/recent',
		'./src/recent/search',
		'./src/counter',
		'./src/messages',
		'./src/users',
		'./src/dialogues',
		'./src/files',
		'./src/sidebar',
		'./src/sidebar/files/files',
		'./src/sidebar/files/validators/file',
		'./src/sidebar/links/links',
		'./src/sidebar/links/validators/link',
		'./src/draft',
		'./src/queue',
		'./src/comment',
		'./src/messages/reactions',
		'./src/messages/pin',
		'./src/dialogues/copilot',
		'./src/validators/message',
		'./src/validators/pin',
		'./src/validators/comment',
		'./src/validators/recent',
	],
];