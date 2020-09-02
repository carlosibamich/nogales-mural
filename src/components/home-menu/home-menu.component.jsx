import React from 'react';
import { withRouter } from 'react-router-dom';

import './home-menu.styles.scss';

const HomeMenu = ({ history }) => {
  return (
    <div className='menu-wrap'>
      <input type='checkbox' className='toggler'></input>
      <div className='burger'><div></div></div>
      <div className='menu'>
        <div className='bg-overlay'>
          <div>
            <ul>
              <li onClick={() => history.push('/contacto')}>Contacto</li>
              <li onClick={() => history.push('/informacion')}>Información</li>
              <li onClick={() => history.push('/coleccion')}>Colección</li>
              <li onClick={() => history.push('/mural')}>Mural</li>
              <li onClick={() => history.push('/collection')}>Collection</li>
              <li onClick={() => history.push('/information')}>Information</li>
              <li onClick={() => history.push('/contact')}>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(HomeMenu);