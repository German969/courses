# VueJS Single File Components

**We can specify a Vue component in a .vue file**

We can include:
- JavaScript logic
- HTML code template
- CSS styling

```HTML
<template>
  <p>{{ hello }}</p>
</template>

<script>
export default {
  data() {
    return {
      hello: 'Hello World!'
    }
  }
}
</script>

<style scoped>
  p {
    color: blue;
  }
</style>
```

- You can use preprocessors to build the components like TypeScript, Sass, Pug, etc.
- You can define scoped css that don't leak to other files
- You can use the src attribute of script and style tag to externalize the javascript and css code
