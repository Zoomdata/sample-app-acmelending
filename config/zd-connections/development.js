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
        client_id: "emQtZGF0YS1hcHAtMDExNDY0MDAzMzI2NDkwY2VhOWRjZmYtYzA0NS00YTc2LTk0NmEtMDRlYjlmNGNjYzdj",
        redirect_uri: "http://localhost:8090",
        auth_uri: "https://pubsdk.zoomdata.com:8443/zoomdata/oauth/authorize",
        scope: ['read']
    }
};
