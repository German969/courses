# Broadcast Channel API

## Create broadcast channel
```JavaScript
const channel = new BroadcastChannel('thechannel')
```

## Send a message
```JavaScript
channel.postMessage('Hey!')
```

## Receive message
```JavaScript
channel.onmessage = event => {
  console.log('Received', event.data)
}
```

## Close the Channel
```JavaScript
channel.close()
```
