AlertDropdown = React.createClass({
	render() {
		return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell"></i> <b className="caret"></b></a>
                < AlertList />
            </li>
		);
	}
});