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
- template
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
  - template expression
    - should avoid side effect
    - return proper type the target expected
    - remember add bracket for target property
    - should not add bracket for target when pass constant string
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
  - Bind attribute
    - `[attr.name]="expression"`
  - Class binding
    - `[class.name]="true|false"`
  - Style binding
    - `[style.style-property]="expression"`
  - Event binding
    - `(event-name)="statement"`
    - Angular look first directive event property
    - $event object, maybe DOM event object or determined by directive
  - Custom event
    - parent directive access payload by $event object and listen by bind event
    - directive pass payload by `event.emit(payload)`
    - template statement have side effect is OK and expected
  - Two way binding
    - has a input property call x and output event call xChange
    - [custom two way binding](jrdfebankerst.paas.cmbchina.cn/manager/orginfo.html)
    - will change parent component's input property x, when change x
    - `[(x)]="value"` eq `[x]="value" (xChange)="value=$event"`
  - Build-in attribute directives
    - NgClass
    - NgStyle
    - NgModel
  - Build-in structural directives
    - they shape or reshape the DOM structure, like add, remove and manipulate the host element
    - can only apply one structural directive to an element
    - need asterisk(*) in front of directive
    - ngIf
    - ngFor
      - micro syntax
      - use index
      - trackBy
    - ngSwitch
      - ngSwitchCase
      - ngSwitchDefault
  - Template input variable
  - Template reference variable
    - ngForm
    - scope is whole template
  - Input and Output property
    - Input is settable
    - Output is observable
    - all components are directives
    - can always bind public property to **own** template, doesn't have to be Input or Output
    - bound property must be public property of TypeScript
    - different with react, Angular divide props into Input and Output
      - Input property receive data value, Output property expose event producer
    - can declare in Metadata of `@Component`
    - alias
  - Template expression operator
    - pipe and safe navigation operator
    - pipe
      - json
    - safe navigation operator
      - syntax `foo?.name`
      - for guard null or undefined value in property path
      - when to use: path may be null
    - non-null assertion operator
      - for tell TypeScript to suspend strict null checks
      - when to use: turn on strict null check of TypeScript
    - $any type cast function
      - when to use: when hard to specify the type
      - syntax `$any(hero).name` or `$any(this).name`
- lifecycle hooks
  - constructor
  - ngOnChanges
  - ngOnInit
  - ngDoCheck
  - ngAfterContentInit
  - ngAfterContentChecked
  - ngAfterViewInit
  - ngAfterViewChecked
  - ngDestroy
- Component Interaction
  - Input and Output property
  - local variable, props: can only use in template
  - `@ViewChild`
  - communicate by service
- Component Style
  - scoped
  - not effect child component or project content
  - `:host`, will add specific attribute to host element, but host element CSS more priority than component use `:host`
  - `:host-context`, will look up ancestor has class name
  - encapsulation option
    - Native - [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
    - Emulated - will add specific attribute to each element
    - None
- Dynamic Component Loader
  - anchor directive
- Attribute directive
  - change behavior or apperance of a DOM element
  - `@Input` tell other compnent the property is public and avaliable for binding
- Pipe
  - Built-in pipe
    - date
    - upperCase
    - lowerCase
    - currency
    - percent
    - pass parameter by colon
    - json
  - chain pipes
  - `PipeTransform` interface
  - when use pipe, Angular will not detect change of **muate array**, you should **replace array**
  - pure and impure pipes
    - angular execute pure pipe when detech pure change
    - angular execute impure pipe during every component change detection cycle
    - implement pure pipe with pure function
    - impure pipe:
      - async pipe
      - should cache if use http request

## 4. Metadata

## 5. Data Binding

## 6. Directives
- two kinds: structural and attribute directives.

## 7. Services

## 8. Dependency injection

## 9. Question
- how did set default value for non-required input props, or mark an input props as required
- did directive similar to react highorder component(render jack)

## 10. Suggestion
- keep component independent of the HTML
- be careful to use impure pipe

## 11. HttpClient
- should specify response type, when response is not JSON
- Error inspection, interpretation, and resolution is something you want to do in the service, not in the component.
- must subscribe, request is deferred before subscribe
- AsyncPipe subscribe automatically
- interceptor order matter

## 12. Router
- singleton
- the order in configuation matter
- debug, enableTracing: true
- router-outlet
  - placeholder
- router links
  - routerLink
  - routerLinkActive
- Router
  - routerState
    - ActivatedRoute: tree of current state
- event
  - NavigationStart
  - RouteConfigLoadStart
  - RouteRecognized
  - GuardsChecksStart
  - ChildActivationStart
  - ActivationStart
  - ResolveStart
  - NavigationCancel
  - Scroll
- global routing module must after feature routing module
- Matrix URL notation
- Animation
  - animation trigger
    - `[@routeAnimation]="getAnimationData(outlet)"`
- navigate by relative path
- named outlet and unnamed outlet
- Secondary Route, independent of primary route
- guard
  - handle asynchronous action before leave or enter
  - interface
    - CanActivate
    - CanActivateChild
    - CanDeactivate
    - Resolve
    - CanLoad
  - ng g guard path/to/guard
  - add canActivate property in route config
- NavigationExtra
  - QueryParameter
  - Fragment