import React from 'react';
import { connect } from 'react-redux';

import { toggleDropdownHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import ShoppingCart from '../../assets/shopping-cart.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleDropdownHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleDropdownHidden}>
      <img className="shopping-icon" src={ShoppingCart} alt="shopping icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  toggleDropdownHidden: () => dispatch(toggleDropdownHidden())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);