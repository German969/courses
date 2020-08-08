# Service Workers

**programmable proxy between your web page and the network**
- no access to DOM, local storage and xhr api
- communication only btw channel messaging api
- cooperate with fetch api and cache api
- only available through https

**They have background processing**

## Offline caching
- Assets that are reused throughout the application, like images, CSS, JavaScript files, can be installed the first time the app is opened
- Using the Fetch API we can edit the response coming from the server, determining if the server is not reachable and providing a response from the cache instead

## Lifecycle
