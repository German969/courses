# Notification API

**used to show messages to the user ( even if the web site / web app is not open in the browser)**

## Use whithout the Push API
```JavaScript
if (window.Notification && Notification.permission !== "denied") {
	Notification.requestPermission((status) => {
    // status is "granted", if accepted by user
		var n = new Notification('Title', {
			body: 'I am the body text!',
			icon: '/path/to/icon.png' // optional
		})
	})
}

n.close()
```

## Request permissions
`Notification.requestPermission()`

## Perform action when user interacts with permission
```JavaScript
const process = (permission) => {
  if (permission === "granted") {
    // ok we can show the permission
  }
}

Notification.requestPermission((permission) => {
  process(permission)
}).then((permission) => {
  process(permission)
})
```
- The callback is because the support for older implementations of the API
- possible values: 'granted', 'denied' (stored in Notification.permission), or 'default' if not setted

## Create a notification
```JavaScript
Notification.requestPermission()
new Notification('Hey')
```

## Add a body
```JavaScript
new Notification('Hey', {
  body: 'You should see this!'
})
```

## Add an image
```JavaScript
new Notification('Hey', {
  body: 'You should see this!',
  icon: '/user/themes/writesoftware/favicon.ico'
})
```

## Close a notification
```JavaScript
const n = new Notification('Hey')
n.close()
```

### Async
```JavaScript
setTimeout(n.close(), 1 * 1000)
```
