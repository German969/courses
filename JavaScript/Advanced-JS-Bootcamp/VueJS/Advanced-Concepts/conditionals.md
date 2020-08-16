# Conditionals in templates

```HTML
<p v-if="shouldShowThis">Hey!</p>
```
*shouldShowThis is a boolean value*

Example:
```HTML
<template>
  <main>
    <AddFirstTodo v-if="noTodos" />
    <div v-else>
      <AddTodo />
      <Todos :todos=todos />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
    }
  },
  computed: {
    noTodos() {
      return this.todos.length === 0
    }
  }
}
</script>
```

Conditionals can be nested:
```HTML
<template>
  <main>
    <Component1 v-if="shouldShowComponent1" />
    <div v-else>
      <Component2 v-if="shouldShowComponent2" />
      <div v-else>
        <Component3 />
      </div>
    </div>
  </main>
</template>
```
