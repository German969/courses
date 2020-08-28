## Bindings
*Using Svelte you can create a two-way binding between data and the UI.*

```HTML
<script>
let name = ''
</script>

<input bind:value={name}>
```

### Checkboxes and radio buttons
Checkboxes and radio inputs allow those 3 bindings:
- bind:checked
- bind:group
- bind:indeterminate

Using bind:group you can associate a JavaScript array to a list of checkboxes, and have it populated based on the choices made by the user.
```HTML
<script>
let goodDogs = []
let dogs = ['Roger', 'Syd']
</script>

<h2>
  Who's a good dog?
</h2>

<ul>
  {#each dogs as dog}
    <li>{dog} <input type=checkbox bind:group={goodDogs} value={dog}></li>
  {/each}
</ul>

<h2>
  Good dogs according to me:
</h2>

<ul>
  {#each goodDogs as dog}
    <li>{dog}</li>
  {/each}
</ul>
```

bind:indeterminate allows us to bind to the indeterminate state of an element

### Select fields
```HTML
<script>
let selected
</script>

<select bind:value={selected}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>

{selected}
```

Using object values:
```HTML
<script>
let selected

const goodDogs = [
  { name: 'Roger' },
  { name: 'Syd' }
]
</script>

<h2>List of possible good dogs:</h2>
<select bind:value={selected}>
  {#each goodDogs as goodDog}
    <option value={goodDog}>{goodDog.name}</option>
  {/each}
</select>

{#if selected}
<h2>
  Good dog selected: {selected.name}
</h2>
{/if}
```

With the multiple attribute:
```HTML
<script>
let selected = []

const goodDogs = [
  { name: 'Roger' },
  { name: 'Syd' }
]
</script>

<h2>List of possible good dogs:</h2>
<select multiple bind:value={selected}>
  {#each goodDogs as goodDog}
    <option value={goodDog}>{goodDog.name}</option>
  {/each}
</select>

{#if selected.length}
<h2>Good dog selected:</h2>
<ul>
  {#each selected as dog}
    <li>{dog.name}</li>
  {/each}
</ul>
{/if}
```

## Other bindings
- bind:files is a binding valid on type="file" input elements, to bind the list of selected files.
- The details HTML element allows the use of bind:open to bind its open/close value.
- The audio and video media HTML tags allow to bind several of their properties: currentTime, duration, paused, buffered, seekable, played, volume, playbackRate.
- textContent and innerHTML can be bound on contenteditable fields.
- offsetWidth, offsetHeight, clientWidth, clientHeight can be bound, read only, on any block level HTML element, excluding void tags (like br) and elements that are set to be inline (display: inline).
- bind:this is a special kind of binding that allows you to get a reference to an HTML element and bind it to a JavaScript variable

### Binding props
```HTML
<script>
export let inMovement = false
</script>

<button on:click={() => inMovement = true }>Start car</button>
```

```HTML
<script>
  import Car from './Car.svelte';

  let carInMovement;
</script>

<Car bind:inMovement={carInMovement} />

{carInMovement}
```