# zd-data-app-01

Try this application live at http://demos.zoomdata.com/zd-data-app-01. 

This is an advanced data app example that uses the Zoomdata SDK v2.2 to query the Lending Club datasource hosted by a Zoomdata instance at pubsdk.zoomdata.com.

## Commands

```
cd zd-data-app-01

# Install the dependencies
npm install

# Start for development
npm start

#In the browser:
http://localhost:8090/zd-data-app-01
```

To build for production deployment:

```
NODE_ENV=production webpack -p
```

## Developer Notes

Set the production flag to false on config/index.js while developing and testing.  This flag makes the app point to the ZD app dev server instead of the ZD production server. 