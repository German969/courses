# VueJS Events

*We can intercept any DOM event by using the v-on directive*

## The onclick event
```HTML
<template>
  <a v-on:click="handleClick">Click me!</a>
</template>
```
```HTML
<template>
  <a @click="handleClick">Click me!</a>
</template>
```

Were handleClick is atached to the component
```HTML
<script>
export default {
  methods: {
    handleClick: function(event) {
      console.log(event)
    }
  }
}
</script>
```

You can also pass parameters `@click="handleClick(param)"` and they will be received in the method

## Access the event object
```HTML
<template>
  <a @click="handleClick($event)">Click me!</a>
</template>

<script>
export default {
  methods: {
    handleClick: function(event) {
      console.log(event)
    }
  }
}
</script>
```
```HTML
<template>
  <a @click="handleClick('something', $event)">Click me!</a>
</template>

<script>
export default {
  methods: {
    handleClick: function(text, event) {
      console.log(text)
      console.log(event)
    }
  }
}
</script>
```

## Event modifiers
Tell Vue to mess with DOM things:
- **@click.prevent** call event.preventDefault()
- **@click.stop** call event.stopPropagation()
- **@click.passive** makes use of the passive option of addEventListener
- **@click.capture** uses event capturing instead of event bubbling
- **@click.self** make sure the click event was not bubbled from a child event, but directly happened on that element
- **@click.once** the event will only be triggered exactly once

*All of those can be combined by appending them
