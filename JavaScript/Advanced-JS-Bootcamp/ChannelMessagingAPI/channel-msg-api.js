// Channel Messaging API

// Communication between
// The document and an iframe
// Two iframes
// Two documents

// Create channel
const channel = new MessageChannel()
// properties port1 (creator) and port2 (receiver)
// you listen one port and send to another

// Send a message
otherWindow.postMessage()
// Example
const data = { name: 'Flavio' }
const channel = new MessageChannel()
window.postMessage(data, [channel.port2])
// '*' to allow less strict checking, or specify a domain, or specify '/' to set a same-domain target

// Message support all primitive values, array, objects, files, and more

// Receive message
self.addEventListener('message', event => {
  console.log('A new message arrived!')
})

self.addEventListener('message', event => {
  console.log('A new message arrived!')
  console.log(event.data)
})

// Responding back
self.addEventListener('message', event => {
  console.log('A new message arrived!')
  console.log(event.data)

  const data = { someData: 'hey' }
  event.ports[0].postMessage(data)
})

// Close a channel
self.addEventListener('message', event => {
  console.log('A new message arrived!')
  console.log(event.data)

  const data = { someData: 'hey' }
  event.ports[0].postMessage(data)
  event.ports[0].close()
})
