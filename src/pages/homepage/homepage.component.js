import React from 'react';

import HomeMenu from '../../components/home-menu/home-menu.component';
import Title from '../../assets/header.svg';

import './homepage.styles.scss';

const Homepage = () => {
  return (
    <div id='showcase'>
      <div className='header-container'>
        <img className='hero-header' src={Title} />
      </div>
      <HomeMenu />
    </div>
  );
};

export default Homepage;
//export to App.js 