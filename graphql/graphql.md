## 历史
- 2012 Facebook 开发出来
- 2015 开源
- 2016 成为标准

## 谁在使用 graphql
- [Medium](http://www.infoq.com/cn/news/2018/05/medium-reactjs-graphql-migration)
- [AirBnB](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2)
- [Gastby](https://github.com/gatsbyjs/gatsby)
- [Github](https://developer.github.com/v4/)
- [Facebook](https://dev-blog.apollodata.com/graphql-at-facebook-by-dan-schafer-38d65ef075af)
- [Twitter](https://about.sourcegraph.com/graphql/graphql-at-twitter/)
- [the Graph](https://thegraph.com/)

## 生态及工具
- apollo
- awesome-graphql
- graph-tool

## GrahpQL vs RESTful
- 随着业务增长，接口变得越来越多

## 优势
- 方便嵌套查询，节省请求时间
- 不需要进行数据组合
- 服务端返回的数据，严格按照客户端要求，客户端可以放心使用，某些情况下可以不用单独取出需要的字段作处理，只需要写通用的逻辑进行处理，节省代码
- 能够实时了解后端有哪些字段，不需要查契约
- 开发工具可以自动补全提示，例如如果该字段是一个枚举类型的状态，需要查询契约就可以知道有哪些状态
- thin layer API
- 代码即文档
- 实时调试
- 服务端节省参数校验的逻辑，由 GraphQL 完成
- 减少带宽和多个请求的网络时延

## 应用场景
- BFF

## GraphQL 与 SQL

## 类型系统
- Scalar Types
  - Int
  - Float
  - String
  - Boolean
  - ID
- Object Types
- Query Type
  - like REST GET
- Custom Scalar types

## 输入与输出

## Query 和 Muatation
- Muatation execute in serail to avoid race-condition
- Query can be execute paralle

### Variable
> can be use within field and types


## Apollo
### Apollo Server
- Mocking
- Error handling
- Logging
- Custom scalars and enums
- Unions and interface
- Using schema directives
- Implement directive

### Apollo Client
- Apollo
- loading
- fail
- success

### Apollo Engine

## Syntax and Tools
### Schema Definition Language(SDL)
### Type
- express relationship
- shape of data to return
### Description
- can be show autocomplete in GraphQL Playground

## Instrospection
- allow to discover the types of schema, for easily query

### Resolver
- provide the instructions for turning a GraphQL operation into data. 
- arguments
  - parent
  - args
  - context
  - info
- default resolve


## 其他
- [grand stack](http://grandstack.io/)
- 微服务与 GraphQL
- 安全
- 缓存
- 用户认证
- DataLoader

## FAQ

### 1. 存在多级嵌套查询时，如果某一个字段查询出错，如何处理

### 2. 如果某个字段要花的很久的时间才能获取，此时会造成整个接口都很慢，如果用 REST 的话，就不会被影响其他接口

### 3. 如果某个嵌套的字段报错，会造成整个查询不可用吗？

### 4. 是否误用了 HTTP 的 POST，POST 不是幂等的，如果只是 query 并不会改变服务端的数据

### 5. 客户端的更新是 Reactive 的吗？

### 6. 如何从 REST 逐步迁移到 GraphQL

### 7. 怎么配合 protocol buffers 使用 GraphQL

### 8. Type System 进化过程中是否会破坏之前的查询，如果会怎么处理？
> 属于 Breaking change， 应该尽量避免，有些成熟的 GrahpQL 系统会保持原来的接口不变并且不会报错

### 9. 和 React 结合之后，要怎么复用 query

### 10. Schema 是什么
> 客户端和服务端之间的契约，是对服务器能力的一种抽象描述
> tells the server what queries clients are allowed to make, and how different types are related

### 11. Resolver 是什么
> 用来 resolve field

### 12. 什么是 Schema stitching

### 13. 如何使用 GraphQL 搭建 mock-server

### 14. GraphQL 可以代替契约吗？

### 15. GrahpQL 的 query 和 REST 的 endpoint 的区别是什么

### 16. 什么是 GrahpQL
> GraphQL is a language-independent specification for client-server communication

> GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data

> GraphQL is a query language designed to build client applications by providing an intuitive and flexible syntax and system for describing their data requirements and interactions.

### 17. GraphQL executing 的过程是怎么样的
> 从上到下一层层 resolve，同一层的 resolver 会并行执行

[GrahpQL explained](https://dev-blog.apollodata.com/graphql-explained-5844742f195e?&_ga=2.65423214.1742269358.1528458192-1949991866.1527689291)

### 18. GrahpQL vs RPC

### 19. GraphQL error vs REST error