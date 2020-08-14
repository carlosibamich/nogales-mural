import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import HomeMenu from '../home-menu/home-menu.component'

import './footer.styles.scss';

const Footer = ({ history }) => {
  return (
    <div className="footer-container">
      <div className="top-block">
        <div className="footer-info">
          <h3 className="info underline">Designed and Developed by Carlos Ibarra</h3>
          <h3 className="info">Diseño y Desarrollo por Carlos Ibarra</h3>
        </div>
        <div className="social-icons">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon instagram" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </div>
        <div className="copyright-info">
          <h3 className="copyright underline">Copyright &copy; 2020. All Rights Reserved</h3>
          <h3 className="copyright">Todos Los Derechos Reservados</h3>
        </div>
      </div>
      <div className="separator"></div>
      <div className="footer-nav">
        <ul>
          <li onClick={() => history.push('/contacto')}>Contacto</li>
          <li onClick={() => history.push('/informacion')}>Información</li>
          <li onClick={() => history.push('/portafolio')}>Portafolio</li>
          <li onClick={() => history.push('/mural')}>Mural</li>
          <li onClick={() => history.push('/portfolio')}>Portfolio</li>
          <li onClick={() => history.push('/information')}>Information</li>
          <li onClick={() => history.push('/contact')}>Contact</li>
        </ul>
      </div>
    </div>
  )
};

export default withRouter(Footer);
//export to portfolio.component, ...