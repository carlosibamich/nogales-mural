import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { selectCollectionFeature } from '../../redux/collection/collection.selectors';

import Signature from '../../assets/signature.svg';
import HeaderNav from '../../components/header-nav/header-nav.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './presentacion-portafolio.estilos.scss';

const PresentacionPortafolio = ({ presentacionColeccion, agregarArticulo }) => {
  const { nombre, routeName, imagePATH, descripcion, dimensions, medio, price, size } = presentacionColeccion;
  return (
    <div className="portfolio-item-container">
      <HeaderNav />
      <img className="my-name" src={Signature} />
      <div className={`${routeName} ${size} portfolio-item-content`}>
        <div className="item-img">
          <img src={imagePATH} alt="art item"/>
        </div>
        <div className="item-info">
          <div className="title-medium">
            <h2 className="title">{nombre.toUpperCase()}</h2>
            <div className="material">{medio}</div>
          </div>
          <div className="dimensions">
            <div>{dimensions}</div>
          </div>
          <section>{descripcion}</section>
          <div className="add-to-cart"> 
          {price > 0 ? (
            <CustomButton onClick={() => agregarArticulo(presentacionColeccion)}>
              Agregar a carreta
            </CustomButton>
            ) : null} 
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  presentacionColeccion: selectCollectionFeature(ownProps.match.params.collectionId)(state)
});

const mapDispatchToProps = dispatch => ({
  agregarArticulo: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(PresentacionPortafolio);
// exportar a coleccion.componente
