import * as React from 'react';

/* tslint:disable:max-line-length */

export default class IndexPage extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="page text-block" style={{textAlign: 'center'}}>
        <p>
          Playing around with Mobx and React.
        </p>
        <p>
          Click through the links above to check out the demos.
        </p>
        <p>
          <a href="https://github.com/ryanatkn/react-mobx-typescript-experiments">source on GitHub</a>
        </p>
      </div>
    );
  }
}
