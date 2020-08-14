import React from 'react';

import HomeIcon from '../../components/home-icon/home-icon.component';
import BurgerMenu from '../../components/burger-menu/burger-menu.component';
import Footer from '../../components/footer/footer.component';

import './mural.styles.scss';

const Mural = ({ history }) => {
  return (
    <div className="mural-container">
      <button onClick={() => {history.push('/')}}>
        <HomeIcon />
      </button>
      <BurgerMenu />
      <Footer />
    </div>
  )
};

export default Mural;