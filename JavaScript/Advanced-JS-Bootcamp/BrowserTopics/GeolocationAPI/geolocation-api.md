JavaScript# Geolocation API

**Exposed by an object in the browser**
`navigator.geolocation`
*Only for HTTPS served pages*

## Get permissions
*Triggered automatically when we ask for coordinates*

## Get user position
```JavaScript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
  // coords and timestamp
})
```

## Coordinates object
- accuracy -> expressed in meters
- altitude
- altitudeAccuracy
- heading -> the direction towards the device is travelling, expressed in degrees
- latitude
- longitude
- speed -> expresed in meters per second
```JavaScript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
})
```

## Watch position for changes
```JavaScript
navigator.geolocation.watchPosition(position => {
	console.log(position)
})
```

## Stop watching
```JavaScript
const id = navigator.geolocation.watchPosition(position => {
	console.log(position)
})

//stop watching after 10 seconds
setTimeout(() => {
  navigator.geolocation.clearWatch(id)
}, 10 * 1000)
```

## Intercepting permission deny
```JavaScript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
}, error => {
	console.error(error) // error.code (1 = denied, 2 = unavailable, 3 = timeout)
})
```

## Add more options
### set a timeout to get the position
```JavaScript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
}, error => {
	console.error(error)
}, {
  timeout: 1000, // time before errors out
  maximumAge: 10000, // max age cached by the browser
  enableHighAccuracy: true // takes more time
})
```
