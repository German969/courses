# Svelte Templates

## Conditionals
```HTML
<script>
let isRed = true
</script>

{#if isRed}
  <p>Red</p>
{:else if isGreen}
  <p>Green</p>
{:else}
  <p>Not red nor green</p>
  {#if isDog}
    <p>It is a dog</p>
  {/if}
{/if}
```

## Loops
```HTML
<script>
let goodDogs = ['Roger', 'Syd']
</script>

{#each goodDogs as goodDog, index}
  <li>{index}: {goodDog}</li>
{/each}
```

Adding an identifier when editing dynamically:
```HTML
<script>
let goodDogs = ['Roger', 'Syd']
</script>

{#each goodDogs as goodDog (goodDog)}
  <li>{goodDog}</li>
{/each}

<!-- with the index -->
{#each goodDogs as goodDog, index (goodDog)}
  <li>{goodDog}</li>
{/each}
```

## Promises
Svelte provides us the {#await} syntax in templates to directly work with promises at the template level.
```HTML
<script>
  const fetchImage = (async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    return await response.json()
  })()
</script>

{#await fetchImage}
  <p>...waiting</p>
{:then data}
  <img src={data.message} alt="Dog image" />
{:catch error}
  <p>An error occurred!</p>
{/await}
```