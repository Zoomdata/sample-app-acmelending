export const serverDev = {
    credentials: {
        access_token: ''
    },
    application: {
        secure: true,   
        host: 'pubsdk.zoomdata.com',                
        port: 8443,                 
        path: '/zoomdata'
    },
    oauthOptions: {
        client_id: "emQtZGF0YS1hcHAtMDExNDY0MzYwMzQ3MzgyYWJlNzI4NTEtMTQzYi00YWMwLTgzNjYtYmE3M2Y5NWUyNjgx",
        redirect_uri: "http://localhost:8090/%23/tab/dash",
        auth_uri: "https://pubsdk.zoomdata.com:8443/zoomdata/oauth/authorize",
        scope: ['read']
    }
};
