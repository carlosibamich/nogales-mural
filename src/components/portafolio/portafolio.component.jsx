import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPortfolio } from '../../redux/collection/collection.selectors';

import Signature from '../../assets/signature.svg';
import HeaderNav from '../header-nav/header-nav.component';
import ArticuloPortafolio from '../articulo-portafolio/articulo-portafolio.componente';
import Footer from '../footer/footer.component';

import './portafolio.estilos.scss';

const Portfolio = ({ coleccionDeArte }) => {
  return (
    <div className='portfolio-spread'>
      <HeaderNav />
      <div className="heading">
        <img className="my-name" src={Signature} />
        <div className="separator"></div>
        <h3 className="phrase">Una Colección de Ideas, Pinturas, Dibujos y Esculturas de <span>Carlos Ibarra</span></h3>
      </div>
      <div className='portfolio-items'>
        {coleccionDeArte.map(articulo => (
          <ArticuloPortafolio key={articulo.id} articulo={articulo} />
        ))}
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  coleccionDeArte: selectCollectionForPortfolio
});

export default connect(mapStateToProps)(Portfolio);
// exportar a coleccion.componente