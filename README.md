# zd-data-app-01

This is an advanced data app example that uses the Zoomdata SDK v2.2 to query the Lending Club datasource hosted by a Zoomdata instance at pubsdk.zoomdata.com.

Try this application live at https://developer.zoomdata.com/sample/acmelending. Use the following credentials:
```
user: zoomdata
pass: zoomdata
```

## Installation

You must have node installed on your computer. Clone this repo and install the dependencies:
```
git clone https://github.com/Zoomdata/zd-data-app-01
cd zd-data-app-01
npm install
```

## Usage
```
npm start
```

In the browser go to: http://localhost:8090


#### Production deployment:

Set the production flag to true on config/index.js. This flag will make the app point to the ZD production.

Generate the minified public/bundle.js file with the following command:

```
NODE_ENV=production webpack -p
```
or

```
env NODE_ENV=production webpack -p
```
