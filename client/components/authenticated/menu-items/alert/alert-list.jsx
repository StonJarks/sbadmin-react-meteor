AlertList = React.createClass({
	render() {
		return (
			<ul className="dropdown-menu alert-dropdown">
				<AlertItem alertLabel="label label-default" />
				<AlertItem alertLabel="label label-primary" />
				<AlertItem alertLabel="label label-success" />
				<AlertItem alertLabel="label label-info" />
				<AlertItem alertLabel="label label-warning" />
				<AlertItem alertLabel="label label-danger" />

                <li className="divider"></li>
                <li>
                    <a href="#">View All</a>
                </li>
            </ul>
		);
	}
});