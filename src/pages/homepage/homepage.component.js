import React from 'react';

import NavMenu from '../../components/home-menu/home-menu.component';
import HomeIcon from '../../components/home-icon/home-icon.component'
import Title from '../../assets/header.svg';

import './homepage.styles.scss';

const Homepage = () => {
  return (
    <div id='showcase'>
      <div className='header-container'>
        <img className='hero-header' src={Title} />
      </div>
      <NavMenu />
    </div>
  );
};

export default Homepage;
//export to App.js 