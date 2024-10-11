/**
 * @module im/messenger/provider/service
 */
jn.define('im/messenger/provider/service', (require, exports, module) => {
	const { ConnectionService } = require('im/messenger/provider/service/connection');
	const { SyncService } = require('im/messenger/provider/service/sync');
	const { CountersService } = require('im/messenger/provider/service/counters');
	const { ChatService } = require('im/messenger/provider/service/chat');
	const { RecentService } = require('im/messenger/provider/service/recent');
	const { MessageService } = require('im/messenger/provider/service/message');
	const { SendingService } = require('im/messenger/provider/service/sending');
	const { DiskService } = require('im/messenger/provider/service/disk');
	const { ReactionService } = require('im/messenger/provider/service/reaction');
	const { QueueService } = require('im/messenger/provider/service/queue');
	const { ComponentCodeService } = require('im/messenger/provider/service/component-code');
	const { SyncFillerChat } = require('im/messenger/provider/service/classes/sync/fillers/sync-filler-chat');
	const { SyncFillerCopilot } = require('im/messenger/provider/service/classes/sync/fillers/sync-filler-copilot');
	const { SyncFillerDatabase } = require('im/messenger/provider/service/classes/sync/fillers/sync-filler-database');

	module.exports = {
		ConnectionService,
		SyncService,
		CountersService,
		ChatService,
		RecentService,
		MessageService,
		SendingService,
		DiskService,
		ReactionService,
		QueueService,
		ComponentCodeService,
		SyncFillerChat,
		SyncFillerCopilot,
		SyncFillerDatabase,
	};
});
