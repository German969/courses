# VueJS Templates

*Any HTML is a valid Vue.js template, and in addition, Vue provides interpolation and directives*

## Interpolation
Adding data to the component
```JavaScript
new Vue({
  data: {
    name: 'Flavio'
  },
  template: '<span>Hello {{name}}!</span>'
})
```
```HTML
<template>
  <span>Hello {{name}}!</span>
</template>

<script>
export default {
  data() {
    return {
      name: 'Flavio'
    }
  }
}
</script>
```

We can use any javascript expression (only one) inside interpolation
```
{{ name.reverse() }}
{{ name === 'Flavio' ? 'Flavio' : 'stranger' }}
{{ Math.sqrt(16) * Math.random() }}
```

- To avoid interpolation updating on every change use v-once directive
- To include html use the v-html directive

**To use another component inside a template you need to add it to the 'components' prop of the parent component**
```HTML
<script>
import Search from './Search'

export default {
  name: 'Sidebar',
  components: {
    Search
  }
}
</script>
```
```HTML
<template>
  <h2>Sidebar</h2>
  <Search />
</template>

<script>
import Search from './Search'

export default {
  name: 'Sidebar',
  components: {
    Search
  }
}
</script>
```
