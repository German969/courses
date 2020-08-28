# Events

You can define a listener for a DOM event directly in the template, using the on:<event> syntax
```HTML
<button on:click={() => {
  alert('clicked')
}}>Click me</button>
```

```HTML
<script>
const doSomething = (event) => {
  console.log(event)
  alert('clicked')
}
</script>

<button on:click={doSomething}>Click me</button>
```

## Modifiers
```HTML
<button on:click|stopPropagation|preventDefault={doSomething}>Click me</button>
```

Other modifiers:
- capture enables capturing events instead of bubbling
- once only fires the event once
- self only fires the event if the target of the event is this object

## Custom events
With the the createEventDispatcher we can create custom events in components

```HTML
<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  //when it's time to trigger the event
  dispatch('eventName')

  //Yo can also pass an object to the event
  dispatch('eventName', value)

  // or
  dispatch('eventName', {
    someProperty: value
  })
</script>
```

```HTML
<ComponentName on:eventName={event => {
  //do something
}} />
```