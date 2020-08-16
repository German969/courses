# Extending components

*Any component can extend another one*

You import the component you want to extend, and you use the extends property of your component to use the other one as a base
```HTML
<script>
  import { Bar } from 'vue-chartjs'
  export default {
    extends: Bar
  }
</script>
```
