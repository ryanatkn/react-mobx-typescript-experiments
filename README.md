# React MobX TypeScript Experiments

Concept demos using MobX with React and TypeScript.

[https://ryanatkn.github.io/react-mobx-typescript-experiments](https://ryanatkn.github.io/react-mobx-typescript-experiments)

If you have any suggestions or questions, please open an issue!

## Motivation
After having used the excellent Redux library extensively with React,
I wanted to explore the approach offered by MobX.
Whereas Redux embraces immutable data and renders React components
from the top down starting with the connected components up the hierarchy,
MobX embraces mutable, observable data,
granularly re-rendering components automatically when data changes.

MobX tracks the dependencies of each `@observer` component render function
to intelligently re-render only when that data changes.
It's a bit magical, which, depending on your perspective, may be good or bad or both.
This is similar to the strategy used by Vue.

## Findings
- I like MobX, and I will likely reach for it again for small projects and prototyping.
  For most nontrivial projects I will prefer Redux for the benefits of its immutability
  and declarative serializable replayable action stream, the latter of which is possible in MobX
  but not without tradeoffs.
- There's less boilerplate than with Redux. This is largely due to not having the declarative action stream
  that Redux has by default, which is a major tradeoff.
- Writing mutating operations is easier and less error-prone than transforming immutable data,
  and it's fully type safe, unlike Immutable.js and react-addons-update.
- Composing computed properties feels natural and keeps everything nicely co-located.
  See [`src/stores/TodosStore`](https://github.com/ryanatkn/react-mobx-typescript-experiments/blob/gh-pages/src/stores/TodosStore.ts) for an example.
- If I were writing a real application,
  I would make all data transformations explicit by enabling `mobx.useStrict(true)`,
  which requires that all observable-mutating operations be performed in an `@action`.
  This could be seen as additional boilerplate,
  because for example updating a simple property requires defining and calling an action function,
  but I like the explicit and trackable transformations
  that Redux, Flux, and other event sourcing patterns offer.
  The MobX devtools track and expose debug information for actions similar to Redux.
  Actions also ensure efficiency as demonstrated in
  the [Batched Mutations example](https://ryanatkn.github.io/react-mobx-typescript-experiments/#/batched-mutations).
  Some of these examples make mutations outside of actions for demonstration purposes,
  so `useStrict` is set to false.
- After enabling the TypeScript 2.0 compiler flag `strictNullChecks`,
  I had to add the postfix `!` operator whenever components access the MobX stores,
  because all MobX `InjectedStores` interfaces mark the selected stores as optional
  to allow the components to be instantiated by parent components.
  This is a significant annoyance that I'll try to find a better solution for.

## Develop

    npm install
    npm install -g tsd
    tsd install
    npm start
    # browse to http://localhost:8080

## License

public domain ([The Unlicense](license))
