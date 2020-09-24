## Multiple scenes
```JavaScript
// welcome.js
export default class Scene1 extends Phaser.Scene {
  constructor() {
    super('welcome')
  }

  create() {
    this.add.text(20, 20, 'Loading..')

    setTimeout(() => {
      this.scene.start('game')
    }, 2000)
  }
}

// Game.js
export default class Scene2 extends Phaser.Scene {
  constructor() {
    super('game')
  }

  create() {
    this.add.text(20, 20, 'Playing game!')
  }
}
```

```JavaScript
// main game file
import Phaser from 'phaser'
import Welcome from './Welcome'
import Game from './Game'

const config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [
    Welcome,
    Game
  ]
}

const game = new Phaser.Game(config)
```

## Physics
Phaser provides 3 different kinds of built-in physics engines:
- Arcade
- Matter.js
- Impact

Enable Arcade
```JavaScript
const config = {
  //...
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  }
}
```

Adding physics to a single object:
`const dog = this.physics.add.sprite(20, 20, 'dog')`

Creating statis groups:
```JavaScript
//in preload()
this.load.image('ground', 'assets/platform.png') 

//in create()
const platforms = this.physics.add.staticGroup()
const ground = this.add.sprite(200, 200, 'ground')
platforms.add(ground)
```

Creating dynamic groups (with movement):
```JavaScript
const dogs = this.physics.add.group()
const dog = this.add.sprite(20, 20, 'dog')
dogs.add(dog)
```

Create GameObjects from physics:
```JavaScript
platforms.create(200, 200, 'ground');

//instead of
const ground = this.add.sprite(200, 200, 'ground')
platforms.add(ground)
```

## Collisions
You can detect a collision between physics-enabled items.

We have two methods, collider and overlap. collider automatically makes object bounce when they meet. overlap lets objects overlap with each other.

collider
```JavaScript
const collisionHappened = (dog, cat) => {
  projectile.destroy()
}

this.physics.add.collider(dogs, cats, collisionHappened, null,  this)
```

overlap:
```JavaScript
const overlapHappened = (dog, cat) => {
  projectile.destroy()
}

this.physics.add.overlap(dogs, cats, collisionHappened, null,  this)
```

## Screen Boundaries
```JavaScript
const dog = this.physics.add.sprite(20, 20, "dog")

// dont dissapear
dog.setCollideWorldBounds(true)

// make it bounce
dog.setBounce(1)
```
