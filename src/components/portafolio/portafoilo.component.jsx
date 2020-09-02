import React from 'react';
import { Link } from 'react-router-dom';

import COLLECTION_DATA from '../collection/collection.data';
import HomeIcon from '../../components/home-icon/home-icon.component';
import BurgerMenu from '../../components/burger-menu/burger-menu.component';
import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';
import Footer from '../../components/footer/footer.component';

import './portafolio.styles.scss';

class Portafolio extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: COLLECTION_DATA
    };
  };

  render() {
    const { collection } = this.state;

    return (
      <div className='portfolio-spread'>
        <Link to="/"><HomeIcon /></Link>
        <BurgerMenu />
        <div className="heading">
          <h1 className="my-name">Carlos Ibarra</h1>
          <div className="separator"></div>
          <h3 className="phrase">Una Colección de Ideas, Pinturas, Dibujos y Esculturas</h3>
        </div>
        <div className='portfolio-items'>
          {collection.map(({ nombre, imagePATH, id }) => (
            <PortfolioItem key={id} title={nombre} imagePATH={imagePATH} />
          ))}
        </div>
        <Footer />
      </div>
    )
  };
};

export default Portafolio;
//export to App.js