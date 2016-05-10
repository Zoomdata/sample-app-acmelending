import ZoomdataSDK from 'zoomdata-client';

var production = false;

var redirect = {
	dev_uri: "http://localhost:8090/zd-data-app-01",
	prod_uri: "http://demos.zoomdata.com/zd-data-app-01"
}

var devAppConfig = {
	secure: true,   
	host: 'pubsdk.zoomdata.com',                
	port: 8443,                 
	path: '/zoomdata'
}

var prodAppConfig = {
	secure: true,   
	host: 'developer.zoomdata.com',                
	port: 443,                 
	path: '/zoomdata'
}

var devCredentialsConfig = {
  	key: "56ec8877e4b0c1680babc247"
}

var prodCredentialsConfig = {
  	key: "5731c5ebe4b0ef6318f81340"
}

export function obtainRedirect() {
	return production ? redirect.prod_uri : redirect.dev_uri;
}

function initClient() {
	var applicationConfig = production ? prodAppConfig : devAppConfig;
	var credentialsConfig = production ? prodCredentialsConfig : devCredentialsConfig;
    return ZoomdataSDK.createClient({
        credentials: credentialsConfig,
        application: applicationConfig
    });
}

export const createClient = initClient;
