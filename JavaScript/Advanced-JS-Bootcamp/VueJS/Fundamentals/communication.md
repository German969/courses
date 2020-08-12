# Communication between Vue components

## Props
```HTML
<template>
  <div>
    <Car color="green" />
  </div>
</template>

<script>
import Car from './components/Car'

export default {
  name: 'App',
  components: {
    Car
  }
}
</script>
```

## Events to communicate upwards
```HTML
<script>
export default {
  name: 'Car',
  methods: {
    handleClick: function() {
      this.$emit('clickedSomething')
    }
  }
}
</script>
```

The parent can intercept with the **v-on** directive
```HTML
<template>
  <div>
    <Car v-on:clickedSomething="handleClickInParent" />
    <!-- or -->
    <Car @clickedSomething="handleClickInParent" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClickInParent: function() {
      //...
    }
  }
}
</script>
```

Passing parameters
```HTML
<script>
export default {
  name: 'Car',
  methods: {
    handleClick: function() {
      this.$emit('clickedSomething', param1, param2)
    }
  }
}
</script>
```

Retrieving from the parent
```HTML
<template>
  <div>
    <Car v-on:clickedSomething="handleClickInParent" />
    <!-- or -->
    <Car @clickedSomething="handleClickInParent" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClickInParent: function(param1, param2) {
      //...
    }
  }
}
</script>
```

## Using the Event Bus
We can emit an event in a general accessible component like this.$root
```HTML
<script>
export default {
  name: 'Car',
  methods: {
    handleClick: function() {
      this.$root.$emit('clickedSomething')
    }
  }
}
</script>
```

Any other component can listen to this event
```HTML
<script>
export default {
  name: 'App',
  mounted() {
    this.$root.$on('clickedSomething', () => {
      //...
    })
  }
}
</script>
```
