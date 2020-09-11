import React from 'react';
import { withRouter } from 'react-router-dom';

import './articulo-portafolio.estilos.scss';

const ArticuloPortafolio = ({ articulo, history, match }) => {
  const { routeName, imagePATH, nombre  } = articulo;
  return (
    <div 
      id='item-container' 
      onClick={() => history.push(`${match.url}/${routeName}`)}
    >
      <div className='portfolio-image'>
        <div 
          style={{ backgroundImage: `url(${imagePATH})`}}
          className='art-bg' />
      </div>
      <div className='content-container'>
        <div className='content'>
          <h1 className='title'>{nombre.toUpperCase()}</h1>
          <h3 className='view-info'>Oprima para ver imagen completa</h3>
        </div>
      </div>
    </div>
  )
};

export default withRouter(ArticuloPortafolio);
// exportar a Portafolio.componente