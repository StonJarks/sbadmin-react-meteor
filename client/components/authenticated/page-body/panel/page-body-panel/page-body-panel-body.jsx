PageBodyPanelBody = React.createClass({
	types(type) {
		if (type === "areaChart") {
			return <div id="morris-area-chart"></div>;
		} else if (type === "donutChart") {
			return  <div id="morris-donut-chart"></div>;
		} else if (type ==="taskPanel") {
			return <TaskPanel />;
		} else if (type === "transactionPanel") {
			return <TransactionPanel />;
		}		                                
	},
	render() {
		return (
            <div className="panel-body">
                {this.types(this.props.types)}
            </div>
		);
	}
});