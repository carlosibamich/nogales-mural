import React from 'react';
import { connect } from 'react-redux';

import { toggleDropdownHidden } from '../../redux/cart/cart.actions'

import ShoppingIcon from '../../assets/shopping-bag.svg';
import ShoppingCart from '../../assets/shopping-cart.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleDropdownHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleDropdownHidden}>
      <img className="shopping-icon" src={ShoppingCart} alt="shopping icon" />
      {/* <ShoppingCart /> */}
      <span className="item-count">0</span>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  toggleDropdownHidden: () => dispatch(toggleDropdownHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);