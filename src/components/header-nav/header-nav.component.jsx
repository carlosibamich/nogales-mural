import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import HomeIcon from '../home-icon/home-icon.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import BurgerIcon from '../burger-menu/burger-menu.component';

import './header-nav.styles.scss';

const HeaderNav = ({ hidden }) => {
  return (
    <div className="header-nav-container">
      <HomeIcon />
      <CartIcon />
      {hidden ? null : <CartDropdown />}
      <BurgerIcon />
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderNav);