Testboard = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe( 'dashboard' );

    return {
      isLoading: !subscription.ready(),
      people: People.find().fetch()
    };
  },
  render() {
  	
    if ( this.data.isLoading ) {
      return <Loading />;
    } else {
      return (
        <div>
          {/* Page Heading */}
          <PageHeading />
          <SiteAlert />
          {/* Panels */}
          <div className="row">
            <PageHeadingPanel panelColor= "panel-primary" panelIcon= "fa-comments" amount="5" actions="Comments" />
            <PageHeadingPanel panelColor= "panel-green" panelIcon= "fa-tasks" amount="23" actions="Tasks" />
            <PageHeadingPanel panelColor= "panel-yellow" panelIcon= "fa-shopping-cart" amount="124" actions="Orders" />
            <PageHeadingPanel panelColor= "panel-red" panelIcon= "fa-support" amount="13" actions="Support Tickets" />
          </div>

          {/*Page body */}
          <div className="row">
            {/*Area Charts */}  
            <DefaultPanel cols="12" panelType="areaChart" title="Area Chart" icon="fa-bar-chart-o"/>
          </div>
          {/* /.row */}

          <div className="row">
            {/*Donut Charts */}
            <DefaultPanel cols="4" panelType="donutChart" title="Donut Chart" icon="fa-long-arrow-right"/>
              {/*Task Panel */}
              <DefaultPanel cols="4" panelType="taskPanel" title="Task Panel" icon="fa-clock-o"/> 
            {/*Transactions Panel */}
            <DefaultPanel cols="4" panelType="transactionPanel" title="Transaction Panel" icon="fa-money"/>
          </div>
          {/* /.row */}
        </div>
      );
    }
  }
});