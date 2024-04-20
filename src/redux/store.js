import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './subreducers/listsRedux';
import columnsReducer from './subreducers/columnsRedux';
import cardsReducer from './subreducers/cardsRedux';
import searchStringReducer from './subreducers/searchStringRedux';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;