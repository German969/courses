# Progressive Web Apps

**PWA is a term that identifies a bundle of techniques that have the goal of creating a better experience for web-based apps**

*web apps that take advantage of modern browsers features (like web workers and the web app manifest) to let their mobile devices “upgrade” the app to the role of a first-class citizen app.*

## Alternatives
### Native Mobile Apps
Each platform has its own UI and UX conventions, and the native widgets provide the experience that the user expects. They can be deployed and distributed through the platform App Store.

The main pain point with native apps is that cross-platform development requires learning, mastering and keeping up to date with many different methodologies and best practices

### Hybrid Apps
Hybrid applications are built using Web Technologies, but deployed to the App Store. In the middle sits a framework or some way to package the application so it’s possible to send it for review to the traditional App Store.
The key aspect of Hybrid Apps is the write once, run anywhere concept, the different platform code is generated at build time, and you’re building apps using JavaScript, HTML and CSS.

The bad part of building hybrid apps is that unless you do a great job, you might settle on providing a common denominator, effectively creating an app that’s sub-optimal on all platforms because the app is ignoring the platform-specific human-computer interaction guidelines.

### React Native
React Native exposes the native controls of the mobile device through a JavaScript API, but you’re effectively creating a native application, not embedding a website inside a WebView.

Their motto, to distinguish this approach from hybrid apps, is learn once, write anywhere, meaning that the approach is the same across platforms, but you’re going to create completely separate apps in order to provide a great experience on each platform.

## Features
- they are not deployed to the app store
- discoverable using Search Engines
- the browser in combination with the device asks the user if they want to install the app to the home screen
- you don’t need the Apple or Google approval
- PWAs are basically HTML5 applications / responsive websites on steroids
- Progressive Web Apps run offline
- The use of service workers allow the app to always have fresh content
- provide support for push notifications to provide greater re-engagement opportunities
- Also, shareability makes for a much nicer experience for users that want to share your app, as they just need a URL

## Benefits
- PWA are lighter
- No native platform code
- Lower the cost of acquisition
- Significant less effort is needed to build and release updates
- Much more support for deep links than regular app-store apps

## Core Concepts
- **Responsive**: the UI adapts to the device screen size
- **App-like feel**: it doesn’t feel like a website, but rather as an app as much as possible
- **Offline support**: it will use the device storage to provide offline experience
- **Installable**: the device browser prompts the user to install your app
- **Re-engaging**: push notifications help users re-discover your app once installed
- **Discoverable**: search engines and SEO optimization can provide a lot more users than the app store
- **Fresh**: the app updates itself and the content once online
- **Safe**: uses HTTPS
- **Progressive**: it will work on any device, even older one, even if with less features (e.g. just as a website, not installable)
- **Linkable**: easy to point to it, using URLs

## Service Workers
*Part of the Progressive Web App definition is that it must work offline.*

Since the thing that allows the web app to work offline is the Service Worker, this implies that Service Workers are a mandatory part of a Progressive Web App.

## the App Manifest
**The App Manifest is a JSON file that you can use to provide the device information about your Progressive Web App**
`<link rel="manifest" href="/manifest.webmanifest">`

This file tells the device:
- The name and short name of the app
- The icons locations, in various sizes
- The starting URL, relative to the domain
- The default orientation
- The splash screen

```JSON
{
  "name": "The Weather App",
  "short_name": "Weather",
  "description": "Progressive Web App Example",
  "icons": [{
    "src": "../icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    }, {
      "src": "../icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    }, {
      "src": "../icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    }, {
      "src": "../icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }, {
      "src": "../icons/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    }],
  "start_url": "/index.html?utm_source=app_manifest",
  "orientation": "portrait",
  "display": "standalone",
  "background_color": "#3E4EB8",
  "theme_color": "#2F3BA2"
}
```

## The App Shell
*a design concept aimed at loading and rendering the web app container first, and the actual content shortly after, to give the user a nice app-like impression*

*The App Shell is cached separately from the contents, and it’s setup so that retrieving the shell building blocks from the cache takes very little time*

## Transform a site to PWA
### Network first approach
When a user loads a page it is fetched from the network first. If the network call fails for some reason, I lookup the page in the cache to see if we got it cached, otherwise I show the user a message, if the site is totally offline
```JavaScript
// script.js
window.addEventListener('load', () => {
  if (!navigator.serviceWorker) { return }
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  }).catch(err => {
    console.log('SW registration failed', err)
  })
})
```
```JavaScript
// sw.js
self.addEventListener('fetch', event => {
  console.log(event.request)
})
```

### Implement offline page
```JavaScript
// Adding the image to cache
const OFFLINE_GIF = '/img/offline.gif'
const CACHE_NAME = 'blog-v1'
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    cache.addAll([
      '/assets/favicon-32x32.png',
      OFFLINE_GIF
    ])
  }))
})

// Intercepting the fetch request
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => fetch(OFFLINE_GIF)))
})
```

*Remember to update the service worker whenever you change its content. It’s a workflow that might be unfamiliar at first, because it’s not an immediate refresh that will update the content of the service worker stored in the browser.*
