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
        client_id: "emQtZGF0YS1hcHAtMDExNDY0MTMxMzc0NzE1ZjE5YjQyOWItOTdlMC00ZGRmLTgwNzYtNGU4Nzk4ZWViMTEx",
        redirect_uri: "https://developer.zoomdata.com/sample/acmelending/%23/tab/dash",
        auth_uri: "https://developer.zoomdata.com/zoomdata/oauth/authorize",
        scope: ['read']
    }
};
