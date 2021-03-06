# IndexedDB
```JavaScript
'use strict'

import { openDB, deleteDB } from 'https://unpkg.com/idb?module'
```

## Safeguard
```JavaScript
if (!('indexedDB' in window)) {
  console.warn('IndexedDB not supported')
  return
}
```

## Create database
```JavaScript
(async () => {
  //...

  const dbName = 'mydbname'
  const storeName = 'store1'
  const version = 1

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      const store = db.createObjectStore(storeName)
    }
  })
})()
```

## Check if already exists
```JavaScript
const storeName = 'store1'

if (!db.objectStoreNames.contains(storeName)) {
  db.createObjectStore(storeName)
}
```

## Add data on creation
```JavaScript
(async () => {
  //...
  const dbName = 'mydbname'
  const storeName = 'store0'
  const version = 1

  const db = await openDB(dbName, version,{
    upgrade(db, oldVersion, newVersion, transaction) {
      const store = db.createObjectStore(storeName)
      store.put('Hello world!', 'Hello')
    }
  })
})()
```

## Add data on transaction
```JavaScript
(async () => {
  //...
  const dbName = 'mydbname'
  const storeName = 'store0'
  const version = 1

  const db = await openDB(/* ... */)

  const tx = db.transaction(storeName, 'readwrite')
  const store = await tx.objectStore(storeName)

  const val = 'hey!'
  const key = 'Hello again'
  const value = await store.put(val, key)
  await tx.done
})()
```

## Retrieve data
### One item
```JavaScript
const key = 'Hello again'
const item = await db.transaction(storeName).objectStore(storeName).get(key)
```

### All keys
```JavaScript
const items = await db.transaction(storeName).objectStore(storeName).getAllKeys()
```

### All values
```JavaScript
const items = await db.transaction(storeName).objectStore(storeName).getAll()
```

## Delete data
### Delete db
```JavaScript
const dbName = 'mydbname'
await deleteDB(dbName)
```

### Delete object in store
```JavaScript
(async () => {
  //...

  const dbName = 'mydbname'
  const storeName = 'store1'
  const version = 1

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      const store = db.createObjectStore(storeName)
    }
  })

  const tx = await db.transaction(storeName, 'readwrite')
  const store = await tx.objectStore(storeName)

  const key = 'Hello again'
  await store.delete(key)
  await tx.done
})()
```

## Migrate to a new version
```JavaScript
(async () => {
  //...
  const dbName = 'mydbname'
  const storeName = 'store0'
  const version = 1

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      switch (oldVersion) {
        case 0: // no db created before
          // a store introduced in version 1
          db.createObjectStore('store1')
        case 1:
          // a new store in version 2
          db.createObjectStore('store2', { keyPath: 'name' })
      }
      db.createObjectStore(storeName)
    }
  })
})()
```
