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
        client_id: "emQtZGF0YS1hcHAtMDExNDY0MTA2NDc2ODgwNzkzM2M0ZDgtYTQ2OC00MTY2LTgxNmUtM2JhOTllMjljZDk1",
        redirect_uri: "https://developer.zoomdata.com/sample/acmelending",
        auth_uri: "https://developer.zoomdata.com/zoomdata/oauth/authorize",
        scope: ['read']
    }
};
