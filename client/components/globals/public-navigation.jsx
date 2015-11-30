PublicNavigation = React.createClass({
	render() {
		return (      
	        <ul className="nav navbar-right top-nav"> {/* Top Menu Items */}
				<li className={FlowHelpers.currentRoute('login')}><a href={FlowHelpers.pathFor('login')}>Login</a></li>
				<li className={FlowHelpers.currentRoute('signup')}><a href={FlowHelpers.pathFor('signup')}>Sign Up</a></li>
	        </ul>
		);
	}
});

