const UPDATE_SEARCHSTRING = 'app/searchString/UPDATE_SEARCHSTRING';

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
  };

export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING, payload });


export default searchStringReducer;