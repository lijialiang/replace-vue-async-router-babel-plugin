# replace-vue-async-router-babel-plugin

Replace some lazy loaded Vue modules with simple functions via the Babel plugin. Reduce Webpack dependencies during development and speed up compilation.

## Install

```sh
npm i replace-vue-async-router-babel-plugin --save-dev

# or

yarn add replace-vue-async-router-babel-plugin --dev
```

## How to use

```js
module: {
  rules: [
    {
      test: /.*\/router\/.*\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            ['replace-vue-async-router-babel-plugin', { include: [ '/router/a' ] }]
          ]
        }
      }
    }
  ]
}
```

## Example

```js
new VueRouter({
  routes: [
    { path: '/a', component: () => import('/router/a.vue') }, // component `a` will be used normally
    { path: '/b', component: () => import('/router/b.vue') }, // component `b` will be replaced
    { path: '/c', component: () => import('/router/c.vue') }  // component `c` will be replaced
  ]
})
```

## LICENSE

[MIT](./LICENSE)
