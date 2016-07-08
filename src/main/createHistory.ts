import {hashHistory, createMemoryHistory} from 'react-router';

/**
 * Creates the react-router-redux history object.
 */
export default function createHistory(): HistoryModule.History {
  return __TEST__ ? createMemoryHistory() : hashHistory;
}
