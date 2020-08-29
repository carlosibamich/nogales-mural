import React from 'react';

import HeaderNav from '../../components/header-nav/header-nav.component';
import Footer from '../../components/footer/footer.component';

import './mural.styles.scss';

const Mural = () => {
  return (
    <div>
      <HeaderNav />
      <div className="mural-container">
        <div>Mural Stuff</div> 
      </div>
      <Footer />
    </div>
  )
};

export default Mural;