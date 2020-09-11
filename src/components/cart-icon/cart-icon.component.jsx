import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import ShoppingCart from '../../assets/shopping-cart.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img className="shopping-icon" src={ShoppingCart} alt="shopping icon" />
      <div className="item-count-container"><span className="item-count">{itemCount}</span></div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);