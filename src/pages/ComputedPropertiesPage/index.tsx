import * as React from 'react';
import {observer, inject} from 'mobx-react';
import ComputedPropertiesStore from '../../stores/ComputedPropertiesStore';
import {Stores} from '../../types';

interface SelectedStores {
  store?: ComputedPropertiesStore;
}

interface Props extends SelectedStores {}

@inject((stores: Stores): Props => ({store: stores.computedPropertiesStore}))
@observer
export default class ComputedPropertiesPage extends React.Component<Props, {}> {
  render(): JSX.Element {
    const {store} = this.props;
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
            <input type="text" id="first-name" value={store.firstName}
              onChange={this.doChangeFirstName}
            />
            <label htmlFor="last-name">
              last name
            </label>
            <input type="text" id="last-name" value={store.lastName}
              onChange={this.doChangeLastName}
            />
            <div>
              <small>computed full name:</small> {store.fullName}
            </div>
            <div>
              <small>computed full name again:</small> {store.fullName}
            </div>
            <div>
              <small>computed full name yet again:</small> {store.fullName}
            </div>
            <div>
              <small>number of times full name has been computed:</small>{' '}
              {store.fullNameComputeCount}
            </div>
            <button type="button" className="pure-button"
              onClick={store.reset}
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
    this.props.store.updateFirstName(target.value);
  };

  doChangeLastName = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    this.props.store.updateLastName(target.value);
  };
}
