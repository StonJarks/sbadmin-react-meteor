Default = React.createClass({
	render() {
		return (
			<div className="app-root">
				<BertAlert />
				<AppHeader />
				<div className="container">
					{this.props.yield}
				</div>
			</div>
		);
	}
});