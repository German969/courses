# Express Sessions

## Installation
`npm install express-session`

## Usage
```JavaScript
const express = require('express')
const session = require('express-session')

const app = express()
app.use(session({
  'secret': '<ENTER A RANDOM SECRET STRING>'
}))
```

## Accessing the session
```JavaScript
app.get('/', (req, res, next) => {
  console.log(req.session)
}
```

## Set session data
```JavaScript
req.session.name = 'Flavio'
console.log(req.session.name) // 'Flavio'
```
