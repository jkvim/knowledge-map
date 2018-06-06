## 历史
- 2012 Facebook 开发出来
- 2015 开源
- 2016 成为标准

## 生态及工具
- apollo
- awesome-graphql
- graph-tool

## 优势
- 方便嵌套查询，节省请求时间
- 服务端返回的数据，严格按照客户端要求，客户端可以放心使用，某些情况下可以不用单独取出需要的字段作处理，只需要写通用的逻辑进行处理，节省代码

## 应用场景
- BFF

## 类型系统

## 输入与输出

## Query 和 Muatation

## 解析器

## 客户端使用
- Apollo
- loading
- fail
- success

## 微服务与 GraphQL

## 谁在使用 graphql
- [Medium](http://www.infoq.com/cn/news/2018/05/medium-reactjs-graphql-migration)
- [AirBnB]()
- [Gastby]()

## 安全

## GraphQL 与 SQL

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