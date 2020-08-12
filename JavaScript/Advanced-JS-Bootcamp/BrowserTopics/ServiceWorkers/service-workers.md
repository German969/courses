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
- Registration
- Instalation
- Activation

### Registration
```JavaScript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/worker.js')
    .then((registration) => {
      console.log('Service Worker registration completed with scope: ',
        registration.scope)
    }, (err) => {
      console.log('Service Worker registration failed', err)
    })
  })
} else {
  console.log('Service Workers not supported')
}
```
*installation starts in background*

#### Scope
*which part can be controlles by service worker*
```JavaScript
navigator.serviceWorker.register('/worker.js', {
  scope: '/notifications/'
})
```

### Installation
```JavaScript
self.addEventListener('install', (event) => {
  //...
});
```
*This event is used to prepare the service worker*

### Activation
*It cannot interact with pages already loaded*
```JavaScript
self.addEventListener('activate', (event) => {
  //...
});
```
*here you can clean up old caches*

## Updating Service Worker
*To update a Service Worker you just need to change one byte into it, and when the register code is run, it will be updated*
*Once a Service Worker is updated, it won’t become available until all pages that were loaded with the old service worker attached are closed*

## Fetch Events
### Cache lookup
```JavaScript
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) { //entry found in cache
          return response
        }
        return fetch(event.request)
      }
    )
  )
})
```

## Background sync
*Background sync allows outgoing connections to be deferred until the user has a working network connection*
```JavaScript
navigator.serviceWorker.ready.then((swRegistration) => {
  return swRegistration.sync.register('event1')
});
```
```JavaScript
// in service worker
self.addEventListener('sync', (event) => {
  if (event.tag == 'event1') {
    event.waitUntil(doSomething())
  }
})
// doSomething returns a promise, if fail it will retry
```

## Push events
*Combination of Push API and Notification API*
### Listen to upcoming push events
```JavaScript
self.addEventListener('push', (event) => {
  console.log('Received a push event', event)

  const options = {
    title: 'I got a message for you!',
    body: 'Here is the body of the message',
    icon: '/img/icon-192x192.png',
    tag: 'tag-for-this-notification',
  }

  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})
```

## Console logs
*If you have any console log statement (console.log and friends) in the Service Worker, make sure you turn on the Preserve log feature provided by the Chrome DevTools, or equivalent*
