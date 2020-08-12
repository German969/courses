# Vue CLI

## Installation
`npm install -g @vue/cli`
or
`yarn global add @vue/cli`

### Create a new project
`vue create example`
*this is an interactive process, you will be asked for some presets*

### Start the project
`cd example && yarn serve`

### Start production build
`yarn build`

### Run the linter
`yarn lint`

### Run unit tests
`yarn test:unit`

## Presets
`vue create -p favorite example-2`
*presets are stored in the .vuerc file in home directory*

## Add Plugins
`vue add @vue/cli-plugin-babel`

Using an specific version
```JSON
"@vue/cli-plugin-eslint": {
  "version": "^3.0.0"
}
```

## Remotely store presets
A preset can be stored in a remote repository with a preset.json file
`vue create --preset flaviocopes/vue-cli-preset example3`

## Prototyping
Run a self-contained vue App
`yarn global add @vue/cli-service-global`

Create an app.vue file
```HTML
<template>
    <div>
        <h2>Hello world!</h2>
        <marquee>Heyyy</marquee>
    </div>
</template>
```

Run `vue serve app.vue`

*You can serve a composed project with more files having an index.js/main.js file*
