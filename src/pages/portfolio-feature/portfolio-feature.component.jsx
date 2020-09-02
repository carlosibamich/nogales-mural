import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionFeature } from '../../redux/collection/collection.selectors';

import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';

import './portfolio-feature.styles.scss';

const PortfolioFeature = ({ collectionFeature }) => {
  const { name, imagePATH, id } = collectionFeature;
  console.log(collectionFeature);
  return (
    <div className="portfolio-item-container">
      <h1>This is a feature page</h1>
      <h2 className="title">{name}</h2>
      <div className="item">
      <img src={imagePATH} alt="art item"/>
      </div>
        {/* <PortfolioItem key={id} item={collectionFeature}/> */}
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collectionFeature: selectCollectionFeature(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(PortfolioFeature);
// export to collection.component