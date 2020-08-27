import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './portfolio-item.styles.scss';


const PortfolioItem = ({ item, addItem, history, match }) => {
  const { name, imagePATH, routeName } = item;
  return (
    <div 
      id='item-container' 
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      <div className='portfolio-image'>
        <div 
          style={{ backgroundImage: `url(${imagePATH})`}}
          className='art-bg' />
      </div>
      <div className='content-container'>
        <div className='content'>
          <h2 className='title-intro'>Title</h2>
          <h1 className='title'>{name.toUpperCase()}</h1>
        </div>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(withRouter(PortfolioItem));
//export to portfolio.component.jsx