# Generate a JWT from NodeJS

## Header
```JavaScript
const header = { "alg": "HS256", "typ": "JWT" }
const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64')
```

## Payload
```JavaScript
const payload = { username: 'Flavio' }
const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64')
```

## Signature
```JavaScript
const crypto = require('crypto')
const jwtSecret = 'secretKey'

const signature = crypto.createHmac('sha256', jwtSecret).update(encodedHeader + '.' + encodedPayload).digest('base64')
```

## Putting all together
```JavaScript
const jwt = `${encodedHeader}.${encodedPayload}.${signature}`
```