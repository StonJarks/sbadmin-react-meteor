PageHeadingPanel = React.createClass({
	render() {
		return (
			<div className="col-lg-3 col-md-6">
                <div className={"panel " + this.props.panelColor}>
                    <PageHeadingPanelHeader panelIcon={this.props.panelIcon} amount={this.props.amount} actions={this.props.actions} />
                    <PageHeadingPanelFooter />
                </div>
            </div>
);
	}
});
