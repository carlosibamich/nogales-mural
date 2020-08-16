import React from 'react';
import { withRouter } from 'react-router-dom';

import './burger-menu.styles.scss';

const BurgerMenu = ({ history }) => {
  return (
    <div className="menu-container">
      <div className="menu-items">
        <input type='checkbox' className='menu-toggler'></input>
        <div className="burger-box">
          <h4 className="menu-word">menu</h4>
          <h4 className="pages-word">pages</h4>
          <div className='menu-bar'><div></div></div>
        </div>
        <div className="menu">
          <div className="menu-bg"></div>
          <div className="dropdown">
            <div className="pointer"></div>
            <ul>
              <li onClick={() => history.push('/')}>Home</li>
              <li onClick={() => history.push('/contact')}>Contact</li>
              <li onClick={() => history.push('/information')}>Information</li>
              <li onClick={() => history.push('/portfolio')}>Portfolio</li>
              <li onClick={() => history.push('/mural')}>Mural</li>
              <li onClick={() => history.push('/portafolio')}>Portafolio</li>
              <li onClick={() => history.push('/informacion')}>Información</li>
              <li onClick={() => history.push('/contacto')}>Contacto</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(BurgerMenu);