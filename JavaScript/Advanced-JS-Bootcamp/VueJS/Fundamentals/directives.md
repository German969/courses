# VueJS Template Directives

*directives starts with v-*
```HTML
<a v-bind:href="url">{{ linkText }}</a>
<span v-text="name"></span>
<p v-if="shouldShowThis">Hey!</p>
```

## The v-for directive
*Allows to render a list of items*
```HTML
<template>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ['car', 'bike', 'dog']
    }
  }
}
</script>
```
```HTML
<template>
  <div>
    <ul>
      <li v-for="todo in todos">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, title: 'Do something' },
        { id: 2, title: 'Do something else' }
      ]
    }
  }
}
</script>
```

Getting the index
```HTML
<li v-for="(todo, index) in todos"></li>
```
