UserDropdown = React.createClass({
    currentUserEmail () {
        return Meteor.user().emails[0].address;
    },
    logoutUser() {
        Meteor.logout( ( error ) => {
            if ( error ) {
                Bert.alert( error.reason, 'warning' );
            } else {
                Bert.alert( 'Logged out!', 'success' );
            }
        });
    },
	render() {
		return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> {this.currentUserEmail()} <b className="caret"></b></a>
                <ul className="dropdown-menu">
                    <li>
                        <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                    </li>
                    <li className="divider"></li>
                    <li className="logout" onClick={this.logoutUser}>
                        <i className="fa fa-fw fa-power-off"></i> Log Out
                    </li>
                </ul>
            </li>
		);
	}
});