import {observable, computed, action, reaction, autorun} from 'mobx';

export default class BatchedMutationstore {
  @observable counter = 0;

  // This is used to track the number of times `counter` is observed to change by reactions.
  counterReactionCount = 0;

  // This is used to track the number of times `counter` is observed to change by autorun.
  counterAutorunCount = 0;

  // This is used to track the number of times `counterSquared` is computed.
  counterSquaredComputeCount = 0;

  constructor() {
    // Watch `this.counter` in a reaction.
    // Run the reaction with `fireImmediately=true`
    // so the reaction and autorun counters are in sync,
    // which is probably less confusing to beginners.
    reaction(() => this.counter, () => this.counterReactionCount++, true);

    // Watch `this.counter` in an autorun.
    autorun(() => {
      // Read the observable counter so the autorun reacts to it.
      this.counter; // tslint:disable-line:no-unused-expression

      // Count the times the autorun runs.
      this.counterAutorunCount++;
    });
  }

  @computed get counterSquared(): number {
    // This is a hack to track change counts.
    // Getters shouldn't mutate stuff in real code.
    this.counterSquaredComputeCount++;

    return this.counter * this.counter;
  }

  increment = (): void => {
    // Increment the counter.
    this.counter++;

    // Do some net-zero mutations to test how many times
    // the downstream reaction and computed properties run.
    this.counter--;
    this.counter--;
    this.counter--;
    this.counter++;
    this.counter++;
    this.counter++;
  };

  @action incrementWithAction = this.increment;

  reset = (): void => {
    this.counterReactionCount = 0;
    this.counterAutorunCount = 0;
    this.counterSquaredComputeCount = 0;
    this.counter = 0;
  }
}
