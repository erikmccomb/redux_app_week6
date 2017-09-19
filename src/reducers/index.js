// normally can only import 1 reducer, but we will use 
// combine reducers, to import multiple.
import { combineReducers } from 'redux';
//import the reducers to be combined.
import todos from './todos';

const rootReducer = cobineReducers({
  todos,
});

export default rootReducer;