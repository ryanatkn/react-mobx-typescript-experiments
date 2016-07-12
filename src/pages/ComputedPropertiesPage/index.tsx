import * as React from 'react';
import {observer, inject} from 'mobx-react';
import ComputedPropertiesStore from '../../stores/ComputedPropertiesStore';

interface Props {
  computedPropertiesStore?: ComputedPropertiesStore; // provided by the `observer` decorator
}

@inject('computedPropertiesStore')
@observer
export default class ComputedPropertiesPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {computedPropertiesStore} = this.props;
    return (
      <div className="page">
        <p>
          MobX has a simple way to produce derived data via computed properties.
          Note that even though `fullName` is read from the store multiple times,
          it is computed only once each time the data changes.
        </p>
        <form className="pure-form pure-form-stacked">
          <fieldset>
            <label htmlFor="first-name">
              first name
            </label>
            <input type="text" id="first-name" value={computedPropertiesStore.firstName}
              onChange={this.doChangeFirstName}
            />
            <label htmlFor="last-name">
              last name
            </label>
            <input type="text" id="last-name" value={computedPropertiesStore.lastName}
              onChange={this.doChangeLastName}
            />
            <div>
              <small>computed full name:</small> {computedPropertiesStore.fullName}
            </div>
            <div>
              <small>computed full name again:</small> {computedPropertiesStore.fullName}
            </div>
            <div>
              <small>computed full name yet again:</small> {computedPropertiesStore.fullName}
            </div>
            <div>
              <small>number of times full name has been computed:</small>{' '}
              {computedPropertiesStore.fullNameComputeCount}
            </div>
            <button type="button" className="pure-button"
              onClick={computedPropertiesStore.reset}
            >
              reset
            </button>
          </fieldset>
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
