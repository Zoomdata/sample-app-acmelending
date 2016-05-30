export const serverProd = {
    credentials: {
        access_token: ''
    },
    application: {
          secure: true,
          host: 'demo.zoomdata.com',
          port: 443,
          path: '/zoomdata'
    },
    oauthOptions: {
        client_id: "emQtZGF0YS1hcHAtMDExNDY0MzYxNDM0MTE5YWM1YjA5YjMtZDFmNy00NThkLTllYzktZjhhYjZlNjQ2MWMz",
        redirect_uri: "https://apps.zoomdata.com/acmelending/%23/tab/dash",
        auth_uri: "https://demo.zoomdata.com/zoomdata/oauth/authorize",
        scope: ['read']
    }
};
