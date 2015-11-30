AlertItem = React.createClass({
	render() {
		return (
            <li>
                <a href="#">Alert Name <span className={this.props.alertLabel}>Alert Badge</span></a>
            </li>
		)
	}
})