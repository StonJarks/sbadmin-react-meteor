AuthenticatedDefault = React.createClass({
	setStyle() {
		if (!Meteor.loggingIn() && !Meteor.userId()) {
			return {padding: 0};
		}
		return "";
	},
	render() {
		return (
			<div className="app-root">
		    	<div id="wrapper" >
			    	<div className="container-fluid">
				    
				    	<BertAlert />
				        {/* Navigation */}
				        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
				        	<AppHeader />
				        </nav>
				    </div>
			        <div id="page-wrapper">

			            <div className="container-fluid">
			            	{this.props.yield}
			            </div>
			            {/* /.container-fluid */}

			        </div>
			        {/* /#page-wrapper */}
			    </div>
		    			{/* /#wrapper */}
		    </div>

		);
	}
});