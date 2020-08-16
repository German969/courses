# Filters

Filters are the way Vue.js lets us apply formatting and transformations to a value that’s used in a template interpolation.

```HTML
<template>
  <p>Hi {{ name | fallback }}!</p>
</template>

<script>
export default {
  data() {
    return {
      name: 'Flavio'
    }
  },
  filters: {
    fallback: function(name) {
      return name ? name : 'there'
    }
  }
}
</script>
```

Filters can be chained, by repeating the pipe syntax:
```
{{ name | fallback | capitalize }}
```

Advanced filters can also accept parameters, using the normal function parameters syntax
```HTML
<template>
  <p>Hello {{ name | prepend('Dr.') }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: 'House'
    }
  },
  filters: {
    prepend: (name, prefix) => {
      return `${prefix} ${name}`
    }
  }
}
</script>
```
