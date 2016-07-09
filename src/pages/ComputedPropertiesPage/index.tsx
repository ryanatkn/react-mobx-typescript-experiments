import * as React from 'react';
import {observer} from 'mobx-react';
import ComputedPropertiesStore from '../../stores/ComputedPropertiesStore';

interface Props {
  computedPropertiesStore?: ComputedPropertiesStore; // provided by the `observer` decorator
}

@observer(['computedPropertiesStore'])
export default class ComputedPropertiesPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {computedPropertiesStore} = this.props;
    return (
      <div className="page">
        <p>
          Mobx has a simple way to produce derived data via computed properties.
          Note that even though `fullName` is read from the store multiple times,
          it is computed only once each time the data changes.
        </p>
        <form>
          <div>
            <label>
              first name
              <input type="text" value={computedPropertiesStore.firstName}
                onChange={this.doChangeFirstName}
              />
            </label>
          </div>
          <div>
            <label>
              last name
              <input type="text" value={computedPropertiesStore.lastName}
                onChange={this.doChangeLastName}
              />
            </label>
          </div>
          <div>
            computed full name: {computedPropertiesStore.fullName}
          </div>
          <div>
            computed full name again: {computedPropertiesStore.fullName}
          </div>
          <div>
            computed full name yet again: {computedPropertiesStore.fullName}
          </div>
          <div>
            number of times full name has been
            computed: {computedPropertiesStore.fullNameComputeCount}
          </div>
          <div>
            <button type="button" onClick={computedPropertiesStore.reset}>reset</button>
          </div>
        </form>
      </div>
    );
  }

  doChangeFirstName = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    this.props.computedPropertiesStore.updateFirstName(target.value);
  };

  doChangeLastName = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    this.props.computedPropertiesStore.updateLastName(target.value);
  };
}
