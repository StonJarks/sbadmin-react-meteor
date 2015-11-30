PublicDefault = React.createClass({
	render() {
		return (
			<div className="app-root">
				<BertAlert />
		        {/* Navigation */}
		        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
		        	<AppHeader />
			    </nav>

			    {this.props.yield}
			</div>

		);
	}
})