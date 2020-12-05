import { combineReducers } from 'redux-loop';
import { connectRouter } from 'connected-react-router';

const CombineReducers = (history) => combineReducers({
  router: connectRouter(history)
});

export default CombineReducers;