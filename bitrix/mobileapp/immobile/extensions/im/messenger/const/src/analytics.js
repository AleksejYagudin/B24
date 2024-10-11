/**
 * @module im/messenger/const/analytics
 */
jn.define('im/messenger/const/analytics', (require, exports, module) => {
	const CopilotChatType = Object.freeze({
		private: 'chatType_private',
		multiuser: 'chatType_multiuser',
	});

	const Event = Object.freeze({
		openChat: 'open_chat',
		openExisting: 'open_existing',
		openComments: 'open_comments',
		createNewChat: 'create_new_chat',
		clickCreateNew: 'click_create_new',
		submitCreateNew: 'submit_create_new',
		audioUse: 'audio_use',
		openTab: 'open_tab',
		openMessenger: 'open_messenger',
		sendMessage: 'send_message',
		view: 'view',
		click: 'click',
	});

	const Tool = Object.freeze({
		ai: 'ai',
		im: 'im',
	});

	const Category = Object.freeze({
		chatOperations: 'chat_operations',
		messenger: 'messenger',
		channel: 'channel',
		chat: 'chat',
		copilot: 'copilot',
		videoconf: 'videoconf',
		limitBanner: 'limit_banner',
	});

	const Type = Object.freeze({
		ai: 'ai',

		/* region tabs type */
		notifications: 'notifications',
		openlines: 'openlines',

		/* region dialog type */
		user: 'user',
		private: 'user', // for analytics type list: private === user
		chat: 'chat',
		open: 'open',
		general: 'general',
		videoconf: 'videoconf',
		announcement: 'announcement',
		call: 'call',
		support24Notifier: 'support24Notifier',
		support24Question: 'support24Question',
		crm: 'crm',
		sonetGroup: 'sonetGroup',
		calendar: 'calendar',
		tasks: 'tasks',
		thread: 'thread',
		mail: 'mail',
		lines: 'lines',
		copilot: 'copilot',
		channel: 'channel',
		openChannel: 'openChannel',
		generalChannel: 'generalChannel',
		comment: 'comment',
		custom: 'custom', // case for custom dialog type
		limitOfficeChatingHistory: 'limit_office_chating_history',
	});

	const Section = Object.freeze({
		copilotTab: 'copilot_tab',
		chatTab: 'chat_tab',
		channelTab: 'channel_tab',
		notificationTab: 'notification_tab',
		sidebar: 'sidebar',
		chatHistory: 'chat_history',
		chatStart: 'chat_start',
		messageLink: 'message_link',
		chatWindow: 'chat_window',
	});

	const Element = Object.freeze({
		push: 'push',
		main: 'main',
	});

	const P3 = Object.freeze({
		isMemberY: 'isMember_Y',
		isMemberN: 'isMember_N',
	});

	const P1 = Object.freeze({
		openChannel: 'chatType_channelOpen',
		closedChannel: 'chatType_channelClosed',
		generalChannel: 'chatType_channelGeneral',
		comment: 'chatType_comments',
		user: 'chatType_private',
		open: 'chatType_groupOpen',
		chat: 'chatType_groupClosed',
		general: 'chatType_general',
		tasks: 'chatType_tasks',
		calendar: 'chatType_calendar',
		videoconf: 'chatType_videoconf',
		call: 'chatType_call',
		crm: 'chatType_crm',
		mail: 'chatType_mail',
		sonetGroup: 'chatType_sonetGroup',
	});

	const Analytics = Object.freeze({
		CopilotChatType,
		Event,
		Tool,
		Category,
		Type,
		Section,
		Element,
		P3,
		P1,
	});

	module.exports = { Analytics };
});
