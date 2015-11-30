PageHeadingPanelHeader = React.createClass({
	render() {
		return (
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-3">
                        <i className={"fa " + this.props.panelIcon + " fa-5x"}></i>
                    </div>
                    <div className="col-xs-9 text-right">
                        <div className="huge">{this.props.amount}</div>
                        <div>New {this.props.actions}!</div>
                    </div>
                </div>
            </div>
		);
	}
});