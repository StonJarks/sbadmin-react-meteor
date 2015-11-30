PageBodyPanelHeading = React.createClass({
	render() {
		return (
            <div className="panel-heading">
                <h3 className="panel-title"><i className={"fa " + this.props.icon + " fa-fw"}></i> {this.props.title}</h3>
            </div>
		);
	}
})