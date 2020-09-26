# Electron

## Get Started
`yarn init`

```JavaScript
// package.json
{
  "name": "electron",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

```JavaScript
// main.js
"scripts": {
  "start": "electron ."
}
```

`yarn add --dev electron`

`yarn start`

## Sample
```JavaScript
// main.js
'use strict'

const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  )
})
```

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```