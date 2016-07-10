import * as React from 'react';

/* tslint:disable:max-line-length */

export default class IndexPage extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="page text-block" style={{textAlign: 'center'}}>
        <p>
          <a href="https://github.com/mobxjs/mobx">MobX</a> concept demos with React and TypeScript.
        </p>
        <p>
          Click through the links above to check out the different demos.
          If you have any suggestions or questions,
          please <a href="https://github.com/ryanatkn/react-mobx-typescript-experiments/issues">open an issue</a>!
        </p>
        <p>
          <a href="https://github.com/ryanatkn/react-mobx-typescript-experiments">source on GitHub</a>
        </p>
      </div>
    );
  }
}
