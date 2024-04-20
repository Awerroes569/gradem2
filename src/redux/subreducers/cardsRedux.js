import shortid from 'shortid';

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_CARD':
        return [...statePart, { ...action.payload, id: shortid() }];
    case 'UPDATE_FAVORITE':
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
      default:
        return statePart;
    }
  }

export default cardsReducer;