Dashboard = new Meteor.Collection( 'People' );
// #person
//  #avatar - img
//  #name - string
//  #email - string

Dashboard.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Dashboard.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let DashboardSchema = new SimpleSchema({
  "owner": {
    type: String,
    label: "The ID of the owner of this document."
  }
});

Dashboard.attachSchema( DashboardSchema );
