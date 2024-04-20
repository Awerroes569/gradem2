import shortid from 'shortid';
import { strContains } from '../../utils/strContains';

const ADD_CARD = 'app/cards/ADD_CARD';
const UPDATE_FAVORITE = 'app/cards/UPDATE_FAVORITE';
const DELETE_CARD = 'app/cards/DELETE_CARD';

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case UPDATE_FAVORITE:
        const cardIdToUpdate = action.payload.id;
        const updatedCards = statePart.map(card => {
            if (card.id === cardIdToUpdate) {
                return {
                    ...card,
                    isFavorite: !card.isFavorite
                };
            }
            return card;
        });
        return updatedCards;
      case DELETE_CARD:
        return statePart.filter(item => item.id !== action.payload.id);
      default:
        return statePart;
      }
  }

export const addCard = payload => ({ type: ADD_CARD, payload });
export const updateFavorite = payload => ({ type: UPDATE_FAVORITE, payload});
export const deleteCard = payload => ({ type: DELETE_CARD, payload });

export const getAllCards= (state) => state.cards;
export const getFavoriteCards = (state) => state.cards.filter(card => card.isFavorite);
export const getFilteredCards = ({ cards, searchString }, columnId) => 
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getCardById = (state, { cardId }) => { 
  const card = state.cards.find(card => card.id === cardId);
  return card;
  };

export default cardsReducer;