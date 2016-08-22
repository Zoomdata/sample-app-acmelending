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
        client_id: "QWNtZUxlbmRpbmcxNDcxODkxNjA3NTI4MjZkNzE1YzMtOWUwMy00MzYxLWJiN2ItMzQ5YWUyYWY4MGQ4",
        redirect_uri: "https://apps.zoomdata.com/acmelending",
        auth_uri: "https://demo.zoomdata.com/zoomdata/oauth/authorize",
        scope: ['read']
    }
};
