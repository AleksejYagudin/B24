/**
 * @module layout/ui/user/avatar/src/redux-avatar
 */
jn.define('layout/ui/user/avatar/src/redux-avatar', (require, exports, module) => {
	const { Avatar } = require('layout/ui/user/avatar/src/base-avatar');
	const { usersSelector } = require('statemanager/redux/slices/users');
	const { connect } = require('statemanager/redux/connect');

	const mapStateToProps = (state, ownProps) => {
		const { id, name, lastName, avatarSize100 } = usersSelector.selectById(state, Number(ownProps.id)) || {};

		const fullName = name && lastName ? `${name} ${lastName}` : null;

		return {
			id,
			name: fullName,
			image: avatarSize100,
		};
	};

	module.exports = {
		ReduxAvatar: connect(mapStateToProps)(Avatar),
	};
});
