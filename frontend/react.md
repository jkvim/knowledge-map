# React 技术栈

- react 负责渲染
- redux 负责管理状态
  - redux 提供中间件的机制，是定义 HTTP intercepter 的好地方
- redux-safa/redux-observable 负责管理有副作用的 action
- react-router 负责路由
- reselect 负责组合和缓存状态
- immer.js 负责不可变数据


## Redux 吐槽
- 单纯测 action 感觉很鸡肋
- 每次新建一个 state 感觉都和之前的很像，是可以大量 copy paste 的工作


## redux-saga 体验
- 比 redux-thunk 好，可以中断


## context API
## portal
## suspend