#  The Cache API
*It’s not meant to cache individual chunks of data, which is the task of the IndexedDB API*

## Detect if the Cache API is available
```
if ('caches' in window) {
  //ok
}
```

## Initialize Cache
```
caches.open('mycache').then(cache => {
  // you can start using the cache
})
```
*If the cache does not exist yet, caches.open creates it*

## Add items to cache

### add()
```
caches.open('mycache').then(cache => {
  cache.add('/api/todos')
})
```
```
caches.open('mycache').then(cache => {
  const options = {
    // the options
  }
  cache.add(new Request('/api/todos', options))
})
```

### addAll()
```
caches.open('mycache').then(cache => {
  cache.addAll(['/api/todos', '/api/todos/today']).then(() => {
    //all requests were cached
  })
})
```

### Manually fetch and add
```
const url = '/api/todos'
fetch(url).then(res => {
  return caches.open('mycache').then(cache => {
    return cache.put(url, res)
  })
})
```

## Retrieve item from cache
```
caches.open('mycache').then(cache => {
  cache.match('/api/todos').then(res => {
    //res is the Response Object
  })
})
```

## Get all items in a cache
```
caches.open('mycache').then(cache => {
  cache.keys().then(cachedItems => {
    // array of Request objects
  })
})
```

## Get all available caches
```
caches.keys().then(keys => {
  // keys is an array with the list of keys
})
```

## Remove item from cache
```
caches.open('mycache').then(cache => {
  cache.delete('/api/todos')
})
```

## Delete a cache
```
caches.delete('mycache').then(() => {
  // deleted successfully
})
```
