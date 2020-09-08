# Redux Sagas Example

Common Action
```JavaScript
const addMessage = (message, author) => ({
  type: 'ADD_MESSAGE',
  message,
  author
})
```

Reducer
```JavaScript
const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.concat([{
        message: action.message,
        author: action.author
      }])
    default:
      return state
  }
}
```

Initialize Redux Saga
```JavaScript
//...
import createSagaMiddleware from 'redux-saga'
//...
```

Create and apply middleware
```JavaScript
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
```

Run the saga
```JavaScript
import handleNewMessage from './sagas'
//...
sagaMiddleware.run(handleNewMessage)
```

Saga (./sagas/index.js)
```JavaScript
import { takeEvery } from 'redux-saga/effects'

const handleNewMessage = function* handleNewMessage(params) {
  const socket = new WebSocket('ws://localhost:8989')
  yield takeEvery('ADD_MESSAGE', (action) => {
    socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage
```
*What this code means is: every time the ADD_MESSAGE action fires, we send a message to the WebSockets server, which responds in this case on localhost:8989*

## Helpers

Helpers are abstractions on top of the low-level saga APIs
- takeEvery()
- takeLatest()
- take()
- put()
- call()

### takeEvery()
```JavaScript
import { takeEvery } from 'redux-saga/effects'

function* watchMessages() {
  yield takeEvery('ADD_MESSAGE', postMessageToServer)
}
```
The watchMessages generator pauses until an ADD_MESSAGE action fires, and every time it fires, it’s going to call the postMessageToServer function

### takeLatest()
It only allows one function handler to run at a time, avoiding concurrency. If another action is fired when the handler is still running, it will cancel it, and run again with the latest data available.

### take()
It only waits a single time. When the action it’s waiting for occurs, the promise resolves and the iterator is resumed, so it can go on to the next instruction set.

### put()
Dispatches an action to the Redux store.
```JavaScript
yield put({ type: 'INCREMENT' })
yield put({ type: "USER_FETCH_SUCCEEDED", data: data })
```

### call()
Allows you to wrap a function call and returns an object that can be easily inspected
```JavaScript
call(delay, 1000) // returns { CALL: {fn: delay, args: [1000]}}
```

## Running Effects in parallel

### all()
```JavaScript
import { all, call } from 'redux-saga/effects'

const [todos, user]  = yield all([
  call(fetch, '/api/todos'),
  call(fetch, '/api/user')
])
```
*all() won’t be resolved until both call() return*

### race()
It just waits for one call to return, and it’s done.
```JavaScript
import { race, call, take } from 'redux-saga/effects'

function* someBackgroundTask() {
  while(1) {
    //...
  }
}

yield race([
  bgTask: call(someBackgroundTask),
  cancel: take('CANCEL_TASK')
])
```