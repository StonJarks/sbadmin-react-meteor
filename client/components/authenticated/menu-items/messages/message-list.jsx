MessageList = React.createClass({
	render() {
		return (
            <ul className="dropdown-menu message-dropdown">
				<MessagePreview />
				<MessagePreview />
                <MessageFooter />
            </ul>
		);
	}
});