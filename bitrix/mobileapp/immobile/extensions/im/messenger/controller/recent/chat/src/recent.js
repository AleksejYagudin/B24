/**
 * @module im/messenger/controller/recent/chat/recent
 */
jn.define('im/messenger/controller/recent/chat/recent', (require, exports, module) => {
	const { clone } = require('utils/object');
	const { Counters } = require('im/messenger/lib/counters');
	const { Calls } = require('im/messenger/lib/integration/immobile/calls');
	const { MessengerEmitter } = require('im/messenger/lib/emitter');
	const { BaseRecent } = require('im/messenger/controller/recent/lib');
	const { RecentConverter } = require('im/messenger/lib/converter');
	const { EventType, ComponentCode } = require('im/messenger/const');
	const { DialogRest } = require('im/messenger/provider/rest');
	const { LoggerManager } = require('im/messenger/lib/logger');
	const logger = LoggerManager.getInstance().getLogger('recent--chat-recent');

	/**
	 * @class ChatRecent
	 */
	class ChatRecent extends BaseRecent
	{
		constructor(options = {})
		{
			super({ ...options, logger });
		}

		bindMethods()
		{
			super.bindMethods();
			this.recentAddHandler = this.recentAddHandler.bind(this);
			this.recentUpdateHandler = this.recentUpdateHandler.bind(this);
			this.recentDeleteHandler = this.recentDeleteHandler.bind(this);
			this.dialogUpdateHandler = this.dialogUpdateHandler.bind(this);
			this.commentCountersDeleteHandler = this.commentCountersDeleteHandler.bind(this);

			this.departmentColleaguesGetHandler = this.departmentColleaguesGetHandler.bind(this);
			this.initMessengerHandler = this.initMessengerHandler.bind(this);
		}

		subscribeViewEvents()
		{
			this.view
				.on(EventType.recent.itemSelected, this.onItemSelected.bind(this))
				.on(EventType.recent.searchShow, this.onShowSearchDialog.bind(this))
				.on(EventType.recent.searchHide, this.onHideSearchDialog.bind(this))
				.on(EventType.recent.loadNextPage, this.onLoadNextPage.bind(this))
				.on(EventType.recent.itemAction, this.onItemAction.bind(this))
				.on(EventType.recent.createChat, this.onCreateChat.bind(this))
				.on(EventType.recent.readAll, this.onReadAll.bind(this))
				.on(EventType.recent.refresh, this.onRefresh.bind(this))
			;
		}

		subscribeStoreEvents()
		{
			this.storeManager
				.on('recentModel/add', this.recentAddHandler)
				.on('recentModel/update', this.recentUpdateHandler)
				.on('recentModel/delete', this.recentDeleteHandler)
				.on('dialoguesModel/add', this.dialogUpdateHandler)
				.on('dialoguesModel/update', this.dialogUpdateHandler)
				.on('commentModel/deleteChannelCounters', this.commentCountersDeleteHandler)
			;
		}

		subscribeMessengerEvents()
		{
			BX.addCustomEvent(EventType.messenger.afterRefreshSuccess, this.stopRefreshing);
			BX.addCustomEvent(EventType.messenger.renderRecent, this.renderInstant);
		}

		subscribeInitMessengerEvent()
		{
			this.messagerInitService.onInit(this.initMessengerHandler);
		}

		/* region Events */

		onItemSelected(recentItem)
		{
			if (recentItem.params.disableTap)
			{
				return;
			}

			if (recentItem.params.type === 'call')
			{
				if (recentItem.params.canJoin)
				{
					this.joinCall(recentItem.params.call.id);
				}
				else
				{
					this.openDialog(recentItem.params.call.associatedEntity.id, ComponentCode.imMessenger);
				}

				return;
			}

			this.openDialog(recentItem.id, ComponentCode.imMessenger);
		}

		onShowSearchDialog()
		{
			MessengerEmitter.emit(EventType.messenger.showSearch, {}, ComponentCode.imMessenger);
		}

		onHideSearchDialog()
		{
			MessengerEmitter.emit(EventType.messenger.hideSearch, {}, ComponentCode.imMessenger);
		}

		onLoadNextPage()
		{
			this.loadNextPage();
		}

		onItemAction(event)
		{
			const action = event.action.identifier;
			const itemId = event.item.params.id;

			this.itemAction.do(action, itemId);
		}

		onCreateChat()
		{
			MessengerEmitter.emit(EventType.messenger.createChat, {}, ComponentCode.imMessenger);
		}

		onReadAll()
		{
			this.store.dispatch('dialoguesModel/clearAllCounters')
				.then(() => {
					return this.store.dispatch('recentModel/clearAllCounters');
				})
				.then(() => {
					this.renderer.render();

					Counters.update();

					return DialogRest.readAllMessages();
				})
				.then((result) => {
					this.logger.info(`${this.constructor.name}.readAllMessages result:`, result);
				})
				.catch((error) => {
					this.logger.error(`${this.constructor.name}.readAllMessages catch:`, error);
				})
			;
		}

		onRefresh()
		{
			MessengerEmitter.emit(
				EventType.messenger.refresh,
				{ redrawHeaderTruly: true, shortMode: true },
				ComponentCode.imMessenger,
			);
		}

		joinCall(callId)
		{
			Calls.joinCall(callId);
		}

		addCall(call, callStatus)
		{
			let status = callStatus;
			if (
				call.associatedEntity.advanced.entityType === 'VIDEOCONF'
				&& call.associatedEntity.advanced.entityData1 === 'BROADCAST'
			)
			{
				status = 'remote';
			}

			const callItem = RecentConverter.toCallItem(status, call);

			this.saveCall(callItem);
			this.drawCall(callItem);
		}

		saveCall(call)
		{
			const elementIndex = this.callList.findIndex((element) => element.id === call.id);
			if (elementIndex >= 0)
			{
				this.callList[elementIndex] = call;

				return;
			}

			this.callList.push(call);
		}

		getCallById(callId)
		{
			return this.callList.find((call) => call.id === callId);
		}

		drawCall(callItem)
		{
			this.view.findItem({ id: callItem.id }, (item) => {
				if (item)
				{
					this.view.updateItem({ id: callItem.id }, callItem);

					return;
				}

				this.view.addItems([callItem]);
			});
		}

		removeCallById(id)
		{
			this.view.removeItem({ id: `call${id}` });
		}

		/* endregion Events */
		recentAddHandler(mutation)
		{
			const recentList = [];
			const recentItemList = clone(mutation.payload.data.recentItemList);

			recentItemList.forEach((item) => recentList.push(item.fields));

			this.addItems(recentList);
		}

		recentUpdateHandler(mutation)
		{
			const recentList = [];

			mutation.payload.data.recentItemList.forEach((item) => {
				recentList.push(clone(this.store.getters['recentModel/getCollection']()[item.index]));
			});

			this.updateItems(recentList);
		}

		dialogUpdateHandler(mutation)
		{
			const dialogId = mutation.payload.data.dialogId;
			const recentItem = clone(this.store.getters['recentModel/getById'](dialogId));
			if (recentItem)
			{
				this.updateItems([recentItem]);
			}
		}

		commentCountersDeleteHandler(mutation)
		{
			const { channelId } = mutation.payload.data;
			const dialog = this.store.getters['dialoguesModel/getByChatId'](channelId);
			const recentItem = clone(this.store.getters['recentModel/getById'](dialog.dialogId));

			if (recentItem)
			{
				this.updateItems([recentItem]);
				Counters.update();
			}
		}

		initMessengerHandler(data)
		{
			void this.updatePageFromServer(data);

			if (data?.departmentColleagues)
			{
				this.departmentColleaguesGetHandler(data.departmentColleagues);
			}
		}

		departmentColleaguesGetHandler(userList)
		{
			this.logger.log(`${this.constructor.name}.departmentColleaguesGetHandler`, userList);

			this.store.dispatch('usersModel/set', userList)
				.catch((err) => {
					this.logger.error(`${this.constructor.name}.departmentColleaguesGetHandler.usersModel/set.catch:`, err);
				});
		}
	}

	module.exports = { ChatRecent };
});
