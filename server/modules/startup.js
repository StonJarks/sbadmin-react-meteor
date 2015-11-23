let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  _generatePeople();
};

let _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

let _setBrowserPolicies = () => Modules.server.setBrowserPolicies();

let _generateAccounts = () => Modules.server.generateAccounts();

let _generatePeople = () => Modules.server.generatePeople();


Modules.server.startup = startup;
