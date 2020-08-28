# Sapper
*Framework built on top of Svelte*

Top features:
- Server side rendering
- Client side hydration

## Installation
`npx degit "sveltejs/sapper-template#rollup" testsapper`

`cd testsapper && npm install`

## Running
`npm run dev`

## App organization
- client.js the entry point for the client application
- server.js the entry point for the server app
- service-worker.js provides the default PWA / offline support implementation
- template.html is the template for server-side responses
- in routes we’ll define .svelte files that will serve as pages
- components named with [] are dynamically generated
- file that starts with an underscore its a file that will be imported by other route components.