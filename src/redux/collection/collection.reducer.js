import CollectionActionTypes from './collection.types';
import COLLECTION_DATA from './collection.data';

const INITIAL_STATE = {
  artCollection: COLLECTION_DATA
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case CollectionActionTypes.DISPLAY_ART_PIECES:
    //   return {
    //     ...state,
    //     artCollection: action.payload
    //   }
    default:
      return state;
  };
};

export default collectionReducer;
// export to root-reducer