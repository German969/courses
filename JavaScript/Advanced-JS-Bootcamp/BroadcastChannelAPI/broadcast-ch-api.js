// Broadcast Channel API

// Create broadcast channel
const channel = new BroadcastChannel('thechannel')

// Send a message
channel.postMessage('Hey!')

// Receive message
channel.onmessage = event => {
  console.log('Received', event.data)
}

// Close the Channel
channel.close()
