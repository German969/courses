# Third Party Libraries

To use 3rd party libraries in Vue ecosystem
- you install the library using npm or yarn
- you import the library in your Vue component

`import somepackage from 'somepackage'`

Some libraries require you to import them the main Vue component
```JavaScript
import vue-moment from 'vue-moment'
Vue.use(require('vue-moment'))
```
