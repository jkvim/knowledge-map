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

## mixin
- what's the apply sequence of mixins and original option
- how to handle conflict

## custom directives
- when to use directives - want to access low level dom
- hook function

## render funciton and vnode
- virtual dom is entire tree of VNodes, built by a tree of Vue components
- vnode must be unique
- JSX
- functional component
- slots() vs children
  - slots().default neq to children, slots() eq children

## filter
- where to use: mustache and v-bind
- arguments place
## vue-router
- router dynamic params
  - match-priority
  - path-to-regexp
- nested route
- navigation
  - router.push
  - router.go
  - ruoter.replace
- hook
  - beforeRouteUpdate
  - onCompelete
  - onAbort
- named-route
- named-view
- redirect vs alias
- pass props
- history mode
  - default is hash mode
  - need to handle NotFound page
- navigation guard (*)
  - hooks
  - flow (https://router.vuejs.org/zh-cn/advanced/navigation-guards.html)
- meta
  - auth redirect
  - route record in matched array
- transition
- data-fetching
  - before enter route
  - after enter route
  - before route update
- scroll behavior control
- lazyload and webpack
- $router and $route
  - $route is immutable
  - $router and $route can be reach in every child component
- <router-link>
- <router-view>

## vuex
- state - view - action
- concepts
  - state
    - single source of truth
    - inject from root instance
  - getter
  - mutation
    - sync
  - action
    - can be async
  - module
- project structure
- plugin
- form two way binding handle
- test (*)

## question
- vue can have multiple instance?
- how template work?
- how vue track data change and update dom?
- what's the lifecycle?
- does vue has high order component?
- how vnode work
- what's dataset
- event system
- how to implement v-model
- how modifier work
- what's delegate to other component
- how to use vue with typescript
- what's difference between funcitonal component and normal component
  - no this
  - no state
  - no lifecycle method
  - use context.children as slots()

## resouces
- https://qianduan.group/posts/5a4dfd3770f2ba7107d5a776