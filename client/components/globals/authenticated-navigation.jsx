AuthenticatedNavigation = React.createClass({
	render() {
		return (        
	        <ul className="nav navbar-right top-nav"> {/* Top Menu Items */}
	            <MessageDropdown />
	            <AlertDropdown />
	            <UserDropdown />
	            <Sidebar />
	        </ul>
		);
	}
});

