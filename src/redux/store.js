import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import shortid from 'shortid';

const reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]};
      case 'ADD_CARD':
        return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
      case 'UPDATE_SEARCHSTRING':
        return { ...state, searchString: action.payload };
      case 'ADD_LIST':
        return { ...state, lists: [...state.lists, { id: shortid(), ...action.payload }]};
      case 'UPDATE_FAVORITE':
            const cardIdToUpdate = action.payload.id;
            const updatedCards = state.cards.map(card => {
                if (card.id === cardIdToUpdate) {
                    return {
                        ...card,
                        isFavorite: !card.isFavorite
                    };
                }
                return card;
            });
            return {
                ...state,
                cards: updatedCards
            };
      default:
        return state;
    }
  };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// SELECTORS

export const getFilteredCards = ({ cards, searchString }, columnId) => 
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = (state) => state.columns;
export const getAllLists = (state) => state.lists;
export const getAllCards= (state) => state.cards;
export const getFavoriteCards = (state) => state.cards.filter(card => card.isFavorite);
export const getListById = ({lists},listId) => lists.find(list => list.id ===listId);
export const getColumnsByList = ({columns},listId) => columns.filter(column => column.listId ===listId);
export const getCardById = (state, { cardId }) => { 
  const card = state.cards.find(card => card.id === cardId);
  return card;
  };
  
// ACTIONS

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const updateFavorite = payload => ({ type: 'UPDATE_FAVORITE', payload});

export default store;