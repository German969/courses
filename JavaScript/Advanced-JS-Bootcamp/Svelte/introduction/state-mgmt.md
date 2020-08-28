# State Management

## Using Props
When a component needs to share data with another, the state can be moved up in the components tree until there’s a common parent to those components.

The state needs to be passed down until it reaches all the components that need this state information.

## Context API
You set an object in the context, associating it to a key:
```HTML
<script>
import { setContext } from 'svelte'

const someObject = {}

setContext('someKey', someObject)
</script>
```

In another component you can use getContext to retrieve the object assigned to a key:
```HTML
<script>
import { getContext } from 'svelte'

const someObject = getContext('someKey')
</script>
```

*You can only use getContext to retrieve a key either in the component that used setContext or in one of its descendants.*

## Stores
*When you want to let two components living in 2 different component trees communicate*

You can put this into a separate .js file:
```JavaScript
import { writable, get } from 'svelte/store'

// create store variable
const username = writable('Guest')

// Get the value once
get(username) //'Guest'
```

*To create a reactive variable that’s updated whenever the store value changes instead, you can prepend the store variable using $*

And import it from any component:
```HTML
<script>
import { username } from './store.js'

// Set a new value
username.set('new username')

// updating the value
const newUsername = 'new username!'
username.update(existing => {
  console.log(`Updating username from ${existing} to ${newUsername}`)
  return newUsername
})

// If you want to execute an action when the variable change
username.subscribe(newValue => {
  console.log(newValue)
})
</script>
```

## Readable Stores
*they can’t be updated from the outside - there’s no set() or update() method*

```JavaScript
import { readable } from 'svelte/store'

// You can provide a function that will be responsible for updating it
export const count = readable(0, set => {
  setTimeout(() => {
    set(1)
  }, 1000)
})
```

Using it in another component
```HTML
<script>
import { count } from './store.js'
</script>

{$count}
```

## Derived Stores
*allows you to create a new store value that depends on the value of an existing store*

```JavaScript
import { writable, derived } from 'svelte/store'

export const username = writable('Guest')

export const welcomeMessage = derived(username, $username => {
  return `Welcome ${$username}`
})
```

Usage:
```HTML
<script>
import { username, welcomeMessage } from './store.js'
</script>

{$username}
{$welcomeMessage}
```