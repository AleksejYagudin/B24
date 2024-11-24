<?php

return [
	'extensions' => [
		'alert',
		'analytics',
		'bottom-sheet',
		'feature',
		'haptics',

		'layout/ui/form',
		'tasks:layout/fields/deadline/theme/air-compact',
		'tasks:layout/fields/checklist/theme/air-compact',
		'tasks:layout/fields/flow/theme/air-compact',
		'tasks:layout/fields/date-plan/theme/air-compact',
		'tasks:layout/fields/time-tracking/theme/air-compact',

		'layout/ui/fields/user/theme/air-compact',
		'layout/ui/fields/project/theme/air-compact',
		'layout/ui/fields/file/theme/air-compact',
		'layout/ui/fields/tag/theme/air-compact',
		'layout/ui/fields/crm-element/theme/air-compact',
		'ui-system/form/buttons',
		'ui-system/blocks/icon',
		'assets/icons',

		'layout/ui/bottom-toolbar',
		'layout/ui/fields/base/theme/air-compact',
		'layout/ui/fields/file',
		'layout/ui/fields/textarea',
		'layout/ui/loading-screen',
		'layout/ui/user/avatar',
		'layout/ui/user/empty-avatar',
		'layout/ui/user-selection-manager',
		'layout/ui/widget-header-button',
		'notify',
		'rest/run-action-executor',
		'selector/widget/factory',
		'statemanager/redux/slices/users',
		'statemanager/redux/store',
		'statemanager/redux/batched-actions',
		'tariff-plan-restriction',

		'tasks:loc',
		'tasks:checklist',
		'tasks:deadline-picker',
		'tasks:enum',
		'tasks:entry',
		'tasks:disk',
		'tasks:fields/restriction',
		'tasks:statemanager/redux/slices/kanban-settings',
		'tasks:statemanager/redux/slices/stage-settings',
		'tasks:statemanager/redux/slices/tasks',
		'tasks:statemanager/redux/slices/tasks-stages',
		'tasks:statemanager/redux/slices/groups',
		'tasks:statemanager/redux/slices/flows',
		'tasks:task/calendar',
		'tasks:layout/task/form-utils',
		'tasks:layout/task/parent-task',
		'tasks:layout/online',
		'text-editor',
		'toast',
		'tokens',
		'ui-system/typography/text',
		'type',
		'utils/object',
		'utils/date',
		'utils/date/formats',
		'utils/guid',
		'utils/string',
		'utils/function',
	],
	'bundle' => [
		'./src/bottom-panel',
		'./src/checklist',
		'./src/description',
		'./src/priority',
		'./src/responsible',
	],
];
