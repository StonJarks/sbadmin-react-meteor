TaskPanel = React.createClass({
	render() {
		return (
			<div className="list-group">
                <TaskPanelItem time="just now" icon="fa-calendar" action="Calendar updated" />
                <TaskPanelItem time="4 minutes ago" icon="fa-comment" action="Commented on a post" />
                <TaskPanelItem time="23 minutes ago" icon="fa-truck" action="Order 392 shipped" />
                <TaskPanelItem time="46 minutes ago" icon="fa-money" action="Invoice 653 has been paid" />
                <TaskPanelItem time="1 hour ago" icon="fa-user" action="A new user has been added" />
                <TaskPanelItem time="2 hours ago" icon="fa-check" action="pick up dry cleaning" />
                <TaskPanelItem time="yesterday" icon="fa-globe" action="Saved the world" />
            </div>
		);
	}
});