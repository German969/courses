# Phaser

## Installation
`npm init -y`
`npm install phaser`

Bundler:
`npm install -g parcel-bundler`

## Setup
```JavaScript
// game.js
import Phaser from "phaser"

new Phaser.Game()
```

## Build
`parcel watch game.js`

## Serve
```HTML
<!DOCTYPE html>
<html>
  <head>
    <script src="./dist/game.js"></script>
  </head>
</html>
```

### Run
`npm install -g browser-sync`

`browser-sync start --server --files "."`

## Canvas
```JavaScript
new Phaser.Game({
  width: 450,
  height: 600,
  backgroundColor: 0x000000
})
```

## Scene
Where we define our game
- preload is the function where we can load external assets
- create called when the game is first created
- update is the game event loop, where we define how the game works

```JavaScript
function preload() {

}

function create() {

}

new Phaser.Game({
  width: 450,
  height: 600,
  scene: {
    preload,
    create
  }
})
```

## GameObjects

```JavaScript
function create() {
  // Draw a shape
  const circle = this.add.circle(100, 100, 90, 0xffffff)

  // Add text
  const text = this.add.text(50, 100, "Test", {
    font: "20px Arial",
    fill: "#FFFFFF",
  })
}
```
*Any GameObject as a set of properties. For example we can access the x and y axis positions, in the 2D space, using text.x and text.y.*

## Images
```JavaScript
function preload() {
  this.load.image('apple', 'apple.png')
}

function create() {
  const image = this.add.image(200, 200, 'apple')

  // top left position
  image.setOrigin(0, 0)

  // Scale
  image.setScale(2)

  // Flip
  image.flipY = true
  image.flipX = true
}
```
