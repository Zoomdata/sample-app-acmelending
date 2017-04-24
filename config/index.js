import ZoomdataSDK from 'zoomdata-client';

var applicationConfig = {
     secure: true,
     host: 'live.zoomdata.com',
     port: 8443,
     path: '/zoomdata'
}

var credentialsConfig = {
      key: "58f8f38be4b08525c1801e77"
  };

function initClient() {
   return ZoomdataSDK.createClient({
       credentials: credentialsConfig,
       application: applicationConfig
   })
}

export const createClient = initClient;
