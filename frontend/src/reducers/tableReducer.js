/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

// Constants 
import actionTypeConstants from '../constants/actionTypeConstants';

// Libraries 
import Immutable from 'immutable';

let initialState = Immutable.Map({
  isFetching: false,
  tablesByDatabase: Immutable.Map({}),
  tableQueryResponse: {}
});

export default function databaseReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypeConstants.REQUEST_TABLES:
      return state.set('isFetching', true);

    case actionTypeConstants.RESPONSE_TABLES:
      return state.set('isFetching', false);

    case actionTypeConstants.LIST_TABLES:
      return state.setIn(['tablesByDatabase', action.dbName], action.data);

    case actionTypeConstants.SAVE_RESULT_SET:
      return state.set('tableQueryResponse', action.data);

    default:
      return state;
  }
}