TransactionPanelTableRow = React.createClass({
	render() {
		return (
            <tr>
                <td>{this.props.col._id}</td>
                <td>{this.props.col.date}</td>
                <td>{this.props.col.time}</td>
                <td>{this.props.col.amount}</td>
            </tr>
		);
	}
});