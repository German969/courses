# VueJS Component Props

We can define them in the props property
```JavaScript
Vue.component('user-name', {
  props: ['firstName', 'lastName'],
  template: '<p>Hi {{ firstName }} {{ lastName }}</p>'
})
```
```HTML
<template>
  <p>{{ firstName }} {{ lastName }}</p>
</template>

<script>
export default {
  props: ['firstName', 'lastName'],
}
</script>
```

## Prop types
```JavaScript
Vue.component('user-name', {
  props: {
    firstName: String,
    lastName: String
  },
  template: '<p>Hi {{ firstName }} {{ lastName }}</p>'
})
```
```JavaScript
props: {
  firstName: [String, Number]
}
```

## Mandatory props
```JavaScript
props: {
  firstName: {
    type: String,
    required: true
  }
}
```

## Props default value
```JavaScript
props: {
  firstName: {
    type: String,
    default: 'Unknown person'
  }
}
```
```JavaScript
props: {
  name: {
    type: Object,
    default: {
      firstName: 'Unknown',
      lastName: ''
    }
  }
}
```

## Props validators
```JavaScript
props: {
  name: {
    validator: (name) => {
      return name === 'Flavio' //only allow "Flavios"
    }
  }
}
```

## Pasing a prop to a component
```HTML
<ComponentName color="white" />
```

### For data properties
```HTML
<template>
  <ComponentName :color=color />
</template>

<script>
...
export default {
  //...
  data: function() {
    return {
      color: 'white'
    }
  },
  //...
}
</script>
```

### Using ternary operators
```HTML
<template>
  <ComponentName :colored="color == 'white' ? true : false" />
</template>

<script>
...
export default {
  //...
  data: function() {
    return {
      color: 'white'
    }
  },
  //...
}
</script>
```
