import * as React from 'react';
import {observer} from 'mobx-react';
import SimpleFormStore from '../../stores/SimpleFormStore';

interface Props {
  simpleFormStore?: SimpleFormStore; // provided by the `observer` decorator
}

@observer(['simpleFormStore'])
export default class SimpleFormPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {simpleFormStore} = this.props;
    return (
      <div className="page">
        <p>
          Mobx has a simple way to produce derived data via computed properties.
        </p>
        <form>
          <div>
            <label>
              first name
              <input type="text" value={simpleFormStore.firstName}
                onChange={this.doChangeFirstName}
              />
            </label>
          </div>
          <div>
            <label>
              last name
              <input type="text" value={simpleFormStore.lastName}
                onChange={this.doChangeLastName}
              />
            </label>
          </div>
          <div>
            full computed name: {simpleFormStore.fullName}
          </div>
          <div>
            <button type="button" onClick={simpleFormStore.reset}>reset</button>
          </div>
        </form>
      </div>
    );
  }

  doChangeFirstName = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    this.props.simpleFormStore.updateFirstName(target.value);
  };

  doChangeLastName = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    this.props.simpleFormStore.updateLastName(target.value);
  };
}
