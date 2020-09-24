## The Game Loop

The update method is called until the game ends

```JavaScript
let text

function create() {
  text = this.add.text(100, 100, 'test')
  text.setVelocity(20, 20)
}

function update() {
  text.x += 1
  text.y += 1
  text.angle += 2
}

const game = new Phaser.Game({
  width: 400,
  height: 400,
  scene: {
    create,
    update
  }
})
```

## Mouse Input

To make an object interactive
```JavaScript
text = this.add.text(100, 100, 'test')
text.setInteractive()

// Now we can listen to events
text.on('pointerup', function() {

})
```

Other events:
- pointerdown
- pointerdownoutside
- pointerup
- pointerupoutside
- pointermove
- pointerover
- pointerout
- wheel

To fire an event when any object is clicked:
```JavaScript
this.input.on('gameobjectdown', () => {

})
```

## Keyboard Events
```JavaScript
this.input.keyboard.on(<event>, function() {

})
```

<event> is a string that can be keyup or keydown or a combination of it with a letter
- keyup-A
- keyup-THREE
- keydown-F12
- keydown-ENTER

Other identifiers:
- A ~ Z
- F1 ~ F12
- BACKSPACE, TAB, ENTER, SHIFT, CTRL, ALT
- PAUSE, CAPS_LOCK, ESC, SPACE
- PAGE_UP, PAGE_DOWN, END, HOME
- LEFT, UP, RIGHT,DOWN
- PRINT_SCREEN, INSERT, DELETE
- ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE
- NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_ADD, NUMPAD_SUBTRACT

Instead of listen to individual keys:
```JavaScript
let cursors

function create() {
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.right.isDown) {
    text.x += 5
  }
  if (cursors.left.isDown) {
    text.x -= 5
  }
  if (cursors.up.isDown) {
    text.y -= 5
  }
  if (cursors.down.isDown) {
    text.y -= 5
  }
}
```

## Play Sounds

```JavaScript
let sound

function preload() {
  this.load.audio('sound', 'sound.mp3')
}

function create() {
  sound = this.sound.add('sound')
}

function update() {
  sound.play()
}
```

## Sprites
```JavaScript
function preload() {
  this.load.sprite('dog', 'dog.png')
}

function create() {
  this.add.sprite(400, 200, 'dog');
}
```
*Sprites and images look similar, except for a very big difference: sprites can be animated.*

### Animations

First you need to load a sprite sheet
```JavaScript
this.load.spritesheet('dog', 'dog.png', {
  frameWidth: 20,
  frameHeight: 20
})
```

Then you can animate sprites
```JavaScript
this.anims.create({
  key: 'animate_dog',
  frames: this.anims.generateFrameNames('dog'),
  frameRate: 20,
  repeat: -1
})
```

To start animation
`this.ship1.play('ship1_anim')`

To run only once
```
repeat: 0,
hideOnComplete: true
```

Animate through a fraction of frames
```JavaScript
frames: this.anims.generateFrameNames('dog', {
  start: 0,
  end: 2
})
```
