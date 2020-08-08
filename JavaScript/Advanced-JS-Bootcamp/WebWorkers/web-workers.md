# Web Workers

**Web Workers introduce the possibility of parallel execution inside the browser**

## Create a Web Worker
`const worker = new Worker('worker.js')`

## Check for support
```
if (typeof Worker !== 'undefined') {
  //..workers are available
}
```

## Communicate with web worker
## postMessage API
```
worker.postMessage('hello')
```
```
//worker.js
onmessage = event => {
  console.log(event.data)
}

onerror = event => {
  console.error(event.message)
}
```

### Send msgs back
```
onmessage = event => {
  console.log(event.data)
  postMessage('hey')
}

onerror = event => {
  console.error(event.message)
}
```
```
// main.js
const worker = new Worker('worker.js')
worker.postMessage('hello')

worker.onmessage = event => {
  console.log(event.data)
}
```

## Multiple event listeners
```
// worker.js
addEventListener('message', event => {
  console.log(event.data)
  postMessage('hey')
}, false)

addEventListener('message', event => {
  console.log(`I'm curious and I'm listening too`)
}, false)

addEventListener('error', event => {
  console.log(event.message)
}, false)
```
```
// main.js
const worker = new Worker('worker.js')
worker.postMessage('hello')

worker.addEventListener('message', event => {
  console.log(event.data)
}, false)
```

## Channel Messaging API
```
// main.js
const worker = new Worker('worker.js')
const messageChannel = new MessageChannel()
messageChannel.port1.addEventListener('message', event => {
  console.log(event.data)
})
worker.postMessage(data, [messageChannel.port2])
```
```
// worker.js
addEventListener('message', event => {
  console.log(event.data)
})

// Send messages back
addEventListener('message', event => {
  event.ports[0].postMessage(data)
})
```

## LifeCycle
**If web workers are not listening to messages they will shut down**

## Stopping
```
// main.js
const worker = new Worker('worker.js')
worker.postMessage('hello')
worker.terminate()
```
```
// worker.js
worker.onmessage = event => {
  console.log(event.data)
  close()
}

worker.onerror = event => {
  console.error(event.message)
}
```

## Loading libraries
`importScripts('../utils/file.js', './something.js')``

## APIs available
- xhr, fetch, broadcastchannel, notification cache, console, timers, etc
- Not available: DOM (window and document)
