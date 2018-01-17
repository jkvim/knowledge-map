# JavaScript Bugs Collection

## 1. No initial value
below code will throw error when evvaluate something is undefined
```js
JSON.stringify(undefined)
```

## 2. Has empty initial value but expected is required
below request require username, otherwise will throw error
```
POST /api/login
{
  username: 'xxx',
  password: '***'
}
```

## 3. change one common use component/teamplate but forget to find any other code have use

## 4. use blur condition, will be satify some case you don't want