# 坑

1. 前端从后端取到值后通常没有考虑未空的情况要显示什么

2. 代码设计，如果一个 Service 里面可能会用到多个 resouces，将 resouce 作为依赖注入，而不是在 Service 里面判断，
会让代码的复用性更高
