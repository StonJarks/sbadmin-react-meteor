TaskPanelItem = React.createClass({
	render() {
		return (
			<a href="#" className="list-group-item">
            	<span className="badge">{this.props.time}</span>
                <i className={"fa fa-fw " + this.props.icon}></i> {this.props.action}
            </a>
		);
	}
});