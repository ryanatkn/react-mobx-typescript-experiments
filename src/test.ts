declare var global: any;

if (process.env.NODE_ENV !== 'test') {
  throw new Error('Expected tests to be run with NODE_ENV=test. This file should not be required outside of tests.'); // tslint:disable-line:max-line-length
}

// These environment globals are normally set up by Webpack for development and production,
// but the tests are using ts-node to run TypeScript tests directly,
// and as a result there is no build step to create these globals.
// They're just nice shorthand for `process.env.NODE_ENV` checks.
// This code must run before the test and app files are required.
// Right now this file is guaranteed to run first
// via `mocha --require` in the package.json test command.
const root = typeof window === 'undefined' ? global : window; // support browser for the future
root.__DEV__ = false;
root.__PROD__ = false;
root.__TEST__ = true;
