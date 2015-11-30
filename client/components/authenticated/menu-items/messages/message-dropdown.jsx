MessageDropdown = React.createClass({
	render() {
		return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope"></i> <b className="caret"></b></a>
                <MessageList />
            </li>
		);
	}
});