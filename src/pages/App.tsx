import * as React from 'react';
import AppHeader from '../components/AppHeader';

interface Props {
  children: React.ReactNode;
}

export default class App extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {children} = this.props;
    return (
      <div>
        <AppHeader/>
        {children}
      </div>
    );
  }
}
