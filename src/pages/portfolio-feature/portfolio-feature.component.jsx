import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { selectCollectionFeature } from '../../redux/collection/collection.selectors';

import Signature from '../../assets/signature.svg'
import HeaderNav from '../../components/header-nav/header-nav.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './portfolio-feature.styles.scss';

const PortfolioFeature = ({ collectionFeature, addItem }) => {
  const { name, routeName, imagePATH, description, dimensions, medium, price } = collectionFeature;
  return (
    <div className="portfolio-item-container">
      <HeaderNav />
      <img className="my-name" src={Signature} />
      <div className={`${routeName} portfolio-item-content`}>
        <div className="item-img">
          <img src={imagePATH} alt="art item"/>
        </div>
        <div className="item-info">
          <div className="title-medium">
            <h2 className="title">{name.toUpperCase()}</h2>
            <div className="medium">{medium}</div>
          </div>
          <div className="dimensions">
            <div>{dimensions}</div>
          </div>
          <section>{description}</section>
          <div className="add-to-cart"> 
          {price > 0 ? (
            <CustomButton onClick={() => addItem(collectionFeature)}>
              Add to cart
            </CustomButton>
            ) : null} 
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collectionFeature: selectCollectionFeature(ownProps.match.params.collectionId)(state)
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioFeature);
// export to collection.component
