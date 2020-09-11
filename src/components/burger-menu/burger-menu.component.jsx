import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';

import './burger-menu.styles.scss';

const BurgerMenu = ({ currentUser }) => {
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
            <div className="dropdown-pointer"></div>
            <div className="dropdown-options">
              <Link className="option" to="/">Home</Link>
              <Link className="option" to="/mural">Mural</Link>
              <Link className="option" to="/collection">Portfolio</Link>
              <Link className="option" to="/about">About</Link>
              <Link className="option" to="/contact">Contact</Link>
              {currentUser ? (
                  <div className="option" onClick={() => auth.signOut()}>
                    Sign out
                  </div>
                ) : (
                  <Link className="option" to="/signin">
                    Sign in
                  </Link>
                )
              }
              <Link className="option" to="/coleccion">Portafolio</Link>
              <Link className="option" to="/informacion">Información</Link>
              <Link className="option" to="/contacto">Contactar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(BurgerMenu);
//export to every page component excluding homepage.component