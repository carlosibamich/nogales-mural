import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectArtCollection = createSelector(
  [selectCollection],
  collection => collection.artCollection
);

export const selectCollectionForPortfolio = createSelector(
  [selectArtCollection],
  artCollection => Object.keys(artCollection).map(key => artCollection[key])
)

export const selectCollectionFeature = collectionUrlParam => (
  createSelector(
    [selectArtCollection],
    artCollection => artCollection[collectionUrlParam]
  )
);