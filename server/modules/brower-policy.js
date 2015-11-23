let setBrowserPolicies = () => {
	BrowserPolicy.content.allowOriginForAll( '*.s3.amazonaws.com' );
};

Modules.server.setBrowserPolicies = setBrowserPolicies;