# React Mobx TypeScript Experiments

Experiments with Mobx in a React application written with TypeScript.

## Motivation
After having used the excellent Redux library extensively with React,
I wanted to explore the approach offered by Mobx.
Whereas Redux embraces immutable data and renders React components
from the top down starting with the connected components up the hierarchy,
Mobx embraces mutable, observable data,
granularly re-rendering components automatically when data changes.

Mobx tracks the dependencies of each `@observer` component render function
to intelligently re-render only when that data changes.
It's a bit magical, which, depending on your perspective, may be good or bad or both.
This is similar to the strategy used by Vue.

## Findings
- I like Mobx.
- There's less boilerplate than with Redux.
- Writing mutating operations is easier and less error-prone than transforming immutable data,
  and it's fully type safe, unlike Immutable.js.
- Composing computed properties feels natural and keeps everything nicely co-located.
  See `src/stores/TodosStore` for an example.
- I chose to make all data transformations explicit by enabling `mobx.useStrict(true)`,
  which requires that all observable-mutating operations be performed in an `@action`.
  This could be seen as additional boilerplate,
  because for example updating a simple property requires defining and calling an action function,
  but I like the explicit and trackable transformations
  that Redux, Flux, and other event sourcing strategies offer.
- I found myself wanting type safety in the store selectors
  instead of `@observer(['storeNameString'])`.
  This would be easy to implement in a fork of `mobx-react`. 

## Develop

    npm install
    npm install -g tsd
    tsd install
    npm start
    # browse to http://localhost:8080

## License
MIT
