# The v-model

*v-model sets up a bi-directional binding between the template and the component data*

```HTML
<input v-model="message" placeholder="Enter a message">
<p>Message is: {{ message }}</p>
```

```HTML
<select v-model="selected">
  <option disabled value="">Choose a fruit</option>
  <option>Apple</option>
  <option>Banana</option>
  <option>Strawberry</option>
</select>
<span>Fruit chosen: {{ selected }}</span>
```
