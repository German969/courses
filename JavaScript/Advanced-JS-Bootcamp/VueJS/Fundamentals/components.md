# VueJS Components

## Components are single, independent units of an interface. They can have their own state, markup, and style.

### For non SPAs:
```JavaScript
new Vue({
  /* options */
})
```
```JavaScript
Vue.component('component-name', {
  /* options */
})
```

#### Instantiation
```JavaScript
// <div id="app"></div>
new Vue({ el: '#app' })
// Usually the main component
```
```JavaScript
<div id="app">
  <user-name name="Flavio"></user-name>
</div>

Vue.component('user-name', {
  props: ['name'],
  template: '<p>Hi {{ name }}</p>'
})

new Vue({
  el: '#app'
})
```

### Local Components
*any component created with Vue.component() is globally registered*
```JavaScript
// Encapsulate component into a variable
const Sidebar = {
  template: '<aside>Sidebar</aside>'
}

// Make it available inside another component
new Vue({
  el: '#app',
  components: {
    Sidebar
  }
})
```

#### Reusing a component
```JavaScript
<div id="app">
  <user-name name="Flavio"></user-name>
  <user-name name="Roger"></user-name>
  <user-name name="Syd"></user-name>
</div>

Vue.component('user-name', {
  props: ['name'],
  template: '<p>Hi {{ name }}</p>'
})

new Vue({
  el: '#app'
})
```

### Building blocks
- **el** is used in root components initialized with Vue()
- **props** lists all properties we can pass
- **template** will define the output it generates
- **data** the component local state
- **methods** the component methods
- **computed** computed properties associated
- **watch** the component watchers
