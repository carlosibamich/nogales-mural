import React from 'react';

import HomeIcon from '../../components/home-icon/home-icon.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import BurgerMenu from '../../components/burger-menu/burger-menu.component';
import Footer from '../../components/footer/footer.component';

import './mural.styles.scss';

const Mural = ({ history }) => {
  return (
    <div className="mural-container">
      <div onClick={() => {history.push('/')}}>
        <HomeIcon />
      </div>
      <CartIcon />
      <BurgerMenu />
      <Footer />
    </div>
  )
};

export default Mural;