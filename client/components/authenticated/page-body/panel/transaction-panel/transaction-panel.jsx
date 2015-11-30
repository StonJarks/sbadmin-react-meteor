TransactionPanel = React.createClass({
	tableData() {
		return [
			{_id: "3326",date: "10/21/2013", time: "3:29 PM",amount: "$321.33" },
			{_id: "3325", date: "10/21/2013", time: "3:20 PM", amount: "$234.34"},
			{_id: "3324", date: "10/21/2013", time: "3:03 PM", amount: "$724.17"},
			{_id: "3323", date: "10/21/2013", time: "3:00 PM", amount: "$23.71"},
			{_id: "3322", date: "10/21/2013", time: "2:49 PM", amount: "$8345.23"},
			{_id: "3321", date: "10/21/2013", time: "2:39 PM", amount: "$125,54"},
			{_id: "3320", date: "10/21/2013", time: "2:14 PM", amount: "$23.11"}	
			]
	},
	render() {
		return (
	        <div className="table-responsive">
	            <table className="table table-bordered table-hover table-striped">
	                <thead>
	                    <tr>
	                        <th>Order #</th>
	                        <th>Order Date</th>
	                        <th>Order Time</th>
	                        <th>Amount (USD)</th>
	                    </tr>
	                </thead>
	                <tbody>
	                {this.tableData().map( (col, index) => {
	                	return <TransactionPanelTableRow key={index} col={col} />;
	                	})}
	                </tbody>
	            </table>
	        </div>
		);
	}
})