## Example1
```js
var cards = ['ace', 'king', 'joker', 'seven'];
var shoe = cards;
console.log(cards, shoe);
```

```js
var cards = ['ace', 'king', 'joker', 'seven'];
var shoe = cards;
shoe.pop();
console.log(cards, shoe);
```

```js
var cards = ['ace', 'king', 'joker', 'seven'];
var shoe = cards;
shoe[0] = 'queen';
console.log(cards, shoe);
```

## Example2
```js
// slice
var cards = ['ace', 'king', 'joker', 'seven'];
var shoe = cards.slice();
shoe[0] = 'queen';
console.log(cards, shoe);
```

```js
// concat
var cards = ['ace', 'king', 'joker', 'seven'];
var shoe = [].concat(cards);
shoe[0] = 'queen';
console.log(cards, shoe);
```

```js
// spread
var cards = ['ace', 'king', 'joker', 'seven'];
var shoe = [...cards];
shoe[0] = 'queen';
console.log(cards, shoe);
```

## Example3
```js
// shallow copy
var deepArray = [['hello']];
var shallowCopy = deepArray.slice();

shallowCopy[0].push('world');
console.log('deepArray[0]', deepArray[0]);
console.log('shallowCopy[0]', shallowCopy[0]);
```

```js
// deep copy
var deepArray = [['hello']];
var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push('world');
console.log('deepArray[0]', deepArray[0]);
console.log('deepCopy[0]', shallowCopy[0]);
```

```js
var deepArray = [new String('hello')];
```

深拷贝取决于三种元素类型
- 字面值
- 数组或者对象
- 原型对象

## Reference:
- https://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript

