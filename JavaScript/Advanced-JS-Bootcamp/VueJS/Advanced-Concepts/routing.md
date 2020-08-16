# Vue Router

## Installation
```HTML
<script src="https://unpkg.com/vue-router"></script>
```

If you use the Vue CLI
`npm install vue-router`

After installing, you need to import it
```JavaScript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

After you call Vue.use() passing the router object, in any component of the app you have access to these objects:
- this.$router is the router object
- this.$route is the current route object

## The router object

We can make the app navigate to a new route using:
- this.$router.push()
- this.$router.replace()
- this.$router.go()

```JavaScript
this.$router.push('about') //named route, see later
this.$router.push({ path: 'about' })
this.$router.push({ path: 'post', query: { post_slug: 'hello-world' } }) //using query parameters (post?post_slug=hello-world)
this.$router.replace({ path: 'about' })
```

go() goes back and forth, accepting a number that can be positive or negative to go back in the history
```JavaScript
this.$router.go(-1) //go back 1 step
this.$router.go(1) //go forward 1 step
```

## Defining the routes
```HTML
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
```
*Every time the route changes, either by clicking a link or by changing the URL, a router-link-active class is added to the element that refers to the active route, allowing you to style it*

In the JavaScript part we first include and install the router, then we define 3 route components:
```HTML
<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home  = {
  template: '<div>Home</div>'
}

const Login = {
  template: '<div>Login</div>'
}

const About = {
  template: '<div>About</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/about', component: About }
  ]
})
// If you pass a name param too, you have a named route

new Vue({
  router
}).$mount('#app')
</script>
```

Usually, in a Vue app you instantiate and mount the root app using:
```JavaScript
new Vue({
  render: h => h(App)
}).$mount('#app')
```

When using the Vue Router:
```JavaScript
new Vue({
  router
}).$mount('#app')
```

### Using named routes to pass parameters to the router push and replace methods

With push:
`this.$router.push({ name: 'post', params: { post_slug: 'hello-world' } })`

With replace:
`this.$router.replace({ name: 'post', params: { post_slug: 'hello-world' } })`

## Route guards

*Route guards are middlewares that can alter the execution of a route, redirecting or cancelling the request*

You can have global guards by adding them to the router object
- beforeEach() is called before the navigation is confirmed
- beforeResolve() is called when beforeEach is executed, but before the navigation is confirmed.
- afterEach() is called after the navigation is confirmed
```JavaScript
this.$router.beforeEach((to, from, next) => {
  // ...
  // If we call next(false) we block the navigation
})
```
```JavaScript
this.$router.afterEach((to, from) => {
  // ...
})
```

For single route components:
- beforeRouteEnter(from, to, next) is called before the current route is confirmed
- beforeRouteUpdate(from, to, next) is called when the route changes but the component that manages it is still the same
- beforeRouteLeave(from, to, next) is called when we move away from here

To determine if the navigation to a route is confirmed, Vue Router performs some checks:
- it calls beforeRouteLeave guard in the current component(s)
- it calls the router beforeEach() guard
- it calls the beforeRouteUpdate() in any component that needs to be reused, if any exist
- it calls the beforeEnter() guard on the route object
- it calls the beforeRouterEnter() in the component that we should enter into
- it calls the router beforeResolve() guard
- if all was fine, the navigation is confirmed!
- it calls the router afterEach() guard

*You can use the route-specific guards (beforeRouteEnter and beforeRouteUpdate in case of dynamic routing) as life cycle hooks, so you can start data fetching requests for example*

## Dynamic Routing

We add in a dynamic segment to handle dynamic routes:
```JavaScript
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/post/:post_slug', component: Post },
    { path: '/login', component: Login },
    { path: '/about', component: About }
  ]
})
```

To reference the param:
```JavaScript
const Post = {
  template: '<div>Post: {{ $route.params.post_slug }}</div>'
}
```

When you navigate to a new dinamic route Vue calls beforeRouterUpdate event:
```JavaScript
const Post = {
  template: '<div>Post: {{ $route.params.post_slug }}</div>'
  beforeRouteUpdate(to, from, next) {
    console.log(`Updating slug from ${from} to ${to}`)
    next() //make sure you always call next()
  }
}
```

## Using props
```JavaScript
const Post = {
  props: ['post_slug'],
  template: '<div>Post: {{ post_slug }}</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/post/:post_slug', component: Post, props: true }
  ]
})
```

## Nested Routes
```HTML
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Author  = {
  template: '<div>Author: {{ $route.params.author}}<router-view></router-view></div>'
}

const Post = {
  template: '<div>Post: {{ $route.params.post_slug }}</div>'
}

const router = new VueRouter({
  routes: [{
    path: '/post/:author',
    component: Author,
    children: [
      path: ':post_slug',
      component: Post
    ]
  }]
})

new Vue({
  router
}).$mount('#app')
</script>
```
