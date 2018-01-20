# Angular

## 1. [NgModule](https://angular.io/guide/ngmodules)
- component
- directive
- pipe
- value
- fn

## 2. Component
- [lifecycle](https://angular.io/guide/lifecycle-hooks)

## 3. [Template](https://angular.io/guide/template-syntax)
- builtin directive use
- event listen
- pass props
- syntax
  - not all javascript expressions is valid template expressions
  - template expression context maybe
   - component instance
   - template input variable, like `let heror`
   - template reference variable, like `#heroInput`
   - if name conflict, template variable > directive's context object > component's member
   - if expression is undefined, will not display
   - can not refer global context, like `window`, `document`
  - template expressions appears in two place
    - 1. right of `=`
    - 2. `[property]="expression"`
  - template expressions operator
    - pipe operator
    - non-null assertions operator
    - safe navigation operator and null property paths
  - template statement
    - appear right of `=`, like `(click)="handleClick()"`
    - has side effect
    - different with template expression, not support template expression operator
  - template statement context
    - template input variable and reference variable
    - component instance
    - $event
  - Binding syntax
    - one way: from source to view
    - one way: from view to source
    - two way: view to source to view
    - property neq attribute
  - HTML attribute vs DOM property (*)
  - Template binding works with properties and events, not attributes.
  - Binding target: (element|component|directive)[property|event]

## 4. Metadata

## 5. Data Binding

## 6. Directives
- two kinds: structural and attribute directives.

## 7. Services

## 8. Dependency injection