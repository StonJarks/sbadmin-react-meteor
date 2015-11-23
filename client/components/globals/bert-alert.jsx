BertAlert = React.createClass({
	componentDidMount() {
		this.view = Blaze.render(Template.bertAlert,
					React.findDOMNode(this.refs.container));
	},
	componentDidUnMount() {
		Blaze.remove(this.view);
	},
	render() {
		return <span ref="container" />;
	}
});