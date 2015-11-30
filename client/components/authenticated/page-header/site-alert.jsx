SiteAlert = React.createClass({
	render() {
		return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="alert alert-info alert-dismissable">
                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <i className="fa fa-info-circle"></i>  <strong>Like SB Admin?</strong> Try out <a href="http://startbootstrap.com/template-overviews/sb-admin-2" className="alert-link">SB Admin 2</a> for additional features!
                    </div>
                </div>
            </div>
		);
	}
});