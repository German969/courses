# Svelte

## Create app
`npx degit sveltejs/template firstapp`

## Run
`npm run dev`

## Writing a component
```HTML
<script>
  export let name
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
```

## Importing a component
```HTML
<script>
import Dog from './Dog.svelte'
</script>

<Dog />
```

## Exporting functions
```HTML
<script context="module">
export function changeColor() {
  //...logic to change color..
}
</script>

<button>A button</button>
```

## Importing functions
```HTML
<script>
import Button, { changeColor } from './Button.svelte'
</script>
```

## State Management
```HTML
<script>
let count = 0

const incrementCount = () => {
  count++
}
</script>

{count} <button on:click={incrementCount}>+1</button>
```

*Svelte always wants an assignment, otherwise it might not recognize that the state changed.*
```JavaScript
let list = [1, 2, 3]
list.push(4)
list = list

let list = [1, 2, 3]
list = [...list, 4]
```

## Reactivity
In Svelte you can listen for changes in the component state, and update other variables.
```HTML
<script>
let count = 0
let double = 0

const incrementCount = () => {
  count = count + 1
}

$: console.log(`${count}`)

$: {
  console.log(`the count is ${count}`)
  double = count * 2
  console.log(`double the count is ${double}`)
}
</script>

{count} <button on:click={incrementCount}>+1</button>
```

## Props
```HTML
<script>
import SignupForm from './SignupForm.svelte';
let disabled = true
setTimeout(() => { disabled = false }, 2000)
</script>

<SignupForm disabled={disabled}/>
```

In the SignupForm, you need to export the disabled prop
```HTML
<script>
  export let disabled
</script>
```

## Slots
*Slots are a handy way to let you define components that can be composed together.*

```HTML
<button> 
  <slot>
    Default text for the button
  </slot>
</button>
```
For React developers, this is basically the same as <button>{props.children}</button>

Any component can define the content of the slot
```HTML
<script>
import Button from './Button.svelte'
</script>

<Button>Insert this into the slot</Button>
```

### Named slots
```HTML
<slot name="before" />
<button>
  <slot />
</button>
<slot name="after" />
```

```HTML
<script>
import Button from './Button.svelte'
</script>

<Button>
  Insert this into the slot
  <p slot="before">Add this before</p>
  <p slot="after">Add this after</p>
</Button>
```

And the result will be:
```HTML
<p slot="before">Add this before</p>
<button>
  Insert this into the slot
</button>
<p slot="after">Add this after</p>
```

## Lifecycle Events
We have:
- onMount fired after the component is rendered
- onDestroy fired after the component is destroyed
- beforeUpdate fired before the DOM is updated
- afterUpdate fired after the DOM is updated

To use this methods we need to import then
```HTML
<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte'
</script>
```

Example
```HTML
<script>
  import { onMount } from 'svelte'

  onMount(async () => {
    //do something on mount

    return () => {
      //do something on destroy
    }
  })
</script>
```

```HTML
<script>
  import { onMount } from 'svelte'

  onMount(async () => {
    const interval = setInterval(() => {
      console.log('hey, just checking!')
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })
</script>
```

