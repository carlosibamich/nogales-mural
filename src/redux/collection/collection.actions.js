import CollectionActionTypes from './collection.types';

export const displayCollection = collectionMap => ({
  type: CollectionActionTypes.DISPLAY_ART_PIECES,
  payload: collectionMap
});