import React from 'react';
import { Route } from 'react-router-dom';

import Portafolio from '../../components/portafolio/portafolio.component';
import PresentacionPortafolio from '../presentacion-portafolio/presentacion-portafolio.componente';

import './coleccion.estilos.scss';

const Coleccion = ({ match }) =>  {
  return (
    <div className="collection-container">
      <Route 
        exact 
        path={`${match.path}`} 
        component={Portafolio} 
      />
      <Route 
        path={`${match.path}/:collectionId`} 
        component={PresentacionPortafolio} 
      />
    </div>
  );
};

export default Coleccion;
//export to App.js