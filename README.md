# react-redux-cal
The key to use an Express backend with a project created with create-react-app is on using a proxy. We have a proxy entry in client/package.json

"proxy": "http://localhost/"
This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on localhost:5000
