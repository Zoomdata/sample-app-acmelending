export const serverProd = {
    credentials: {
        access_token: ''
    },
    application: {
          secure: true,
          host: 'developer.zoomdata.com',
          port: 443,
          path: '/zoomdata'
    },
    oauthOptions: {
        client_id: "emQtZGF0YS1hcHAtMDExNDY0MDAzNDE1NzYxMDMzNGI5YTMtODRiNS00NzA2LThhNTktNDlmMzNhOTg3MjEx",
        redirect_uri: "https://developer.zoomdata.com/sample/acmelending",
        auth_uri: "https://developer.zoomdata.com/zoomdata/oauth/authorize",
        scope: ['read']
    }
};
