# vue

![vue logo](https://vuejs.org/images/logo.png)

## what's different between computed and methods
- computed property will be cached and require reactive depency
- method will always invoke when re-render happen

## computed vs watch
- when you need some data that needs to change based on some other data, use computed
- when you need perform some action(such as async action), use watch option

## class and style
- v-bind:class and v-bind:style
- syntax
  - object syntax
  - array syntax
- with component
- style: support multiple value for compat browser

## conditional rendering
- v-if vs v-show
  - v-if has higher toggle cost
  - v-show has higher initial cost
  - v-show toggle by CSS property
  - v-if will reuse element without same key
  - v-if can toggle an template
  - v-show can not toggle an template

## list
- in-place-patch update
- what if child has state and DOM value like input
- array mutation
  - change original
  - replace with new array
- change detect caveats
  - can not detect change array item by index
  - can not detect chagne length of array
  - can not detect add new property to exist object instance, use vm.$set
- v-for
  - compose v-for and v-if, v-if will execute every iteration
  - v-bind:key is required
  - v-for and component *

## event
- event handler
 - expression
 - method name
 - statement
- modifier
  - order matter
  - passive
  - key modifier alias
  - system modifier keys and exact modifier

## component *
- global registration
- local registration
- props down, event up
- static props vs dynamic props
  - pass as string vs pass as javascript expression
- dynamic props with v-bind
- v-bind with object
- mutate props will affect parent
- props merging and replacing
- native event vs custom event
- sync props - two way binding
- v-model with component
- slot
- named slot
- scoped slot
- dynamic component
- keep-alive api
- $ref
- async component
- recusive component
- circular reference
- v-once

## question
- vue can have multiple instance?