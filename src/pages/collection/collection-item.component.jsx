import React from 'react';
import { connect } from 'react-redux';

import Portfolio from '../portfolio/portfolio.component';

const CollectionItem = ({ artCollection }) =>  {
    return (
      <div className="collection-item-container">
        <h2>This will be the Collection item page</h2>
        <h3>It will display the items dynamically (fingers crossed)</h3>
        <div className="collection-items">
          {artCollection.map(({ id, ...otherCollectionProps }) => (
            <Portfolio key={id} {...otherCollectionProps} />
          ))}
        </div>
      </div>
    );
};

const mapStateToProps = ({ collection: { artCollection } }) => ({
  artCollection
});

export default connect(mapStateToProps)(CollectionItem);
//export to App.js