DefaultPanel = React.createClass({
	render() {
		return (
            <div className={"col-lg-"+this.props.cols}>
                <div className="panel panel-default">
                	<PageBodyPanelHeading title={this.props.title} icon={this.props.icon} />
                	<PageBodyPanelBody types={this.props.panelType} />
                	<div className="text-right">
			        	<a href="#">View Details <i className="fa fa-arrow-circle-right"></i></a>
			        </div>
                </div>
            </div>
		);
	}
})