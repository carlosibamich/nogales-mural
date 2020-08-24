import React from 'react';
import { Link } from 'react-router-dom';

import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';
import HomeIcon from '../../components/home-icon/home-icon.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import BurgerMenu from '../../components/burger-menu/burger-menu.component';
import Footer from '../../components/footer/footer.component';

import './portfolio.styles.scss';
import { connect } from 'react-redux';


class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          name: 'Life, Death, Love and Art',
          nombre: 'La Vida, La Muerte, El Amor y El Arte',
          imagePATH: require('../../assets/life-death-love-art.jpg'),
          id: 1
        },
        {
          name: 'Beethoven',
          nombre: 'Beethoven',
          imagePATH: require('../../assets/beethoven.jpg'),
          id: 2
        },
        {
          name: 'Fat Man',
          nombre: 'Fat Man',
          imagePATH: require('../../assets/fat-man.jpg'),
          id: 3
        },
        {
          name: 'Squares and Circles',
          nombre: 'Cuadros y Círculos',
          imagePATH: require('../../assets/squares-circles.jpg'),
          id: 4
        },
        {
          name: 'Frida Kahlo',
          nombre: 'Frida Kahlo',
          imagePATH: require('../../assets/frida-kahlo.jpg'),
          id: 5
        },
        {
          name: 'Black Box',
          nombre: 'La Caja Negra',
          imagePATH: require('../../assets/black-box.jpg'),
          id: 6
        },
        {
          name: 'Jean',
          nombre: 'Jean',
          imagePATH: require('../../assets/jean.jpg'),
          id: 7
        },
        {
          name: 'Van Gogh',
          nombre: 'Van Gogh',
          imagePATH: require('../../assets/vangogh-3.jpg'),
          id: 8
        },
        {
          name: 'Nogales',
          nombre: 'Nogales',
          imagePATH: require('../../assets/nogales-mural.jpg'),
          id: 9
        },
        {
          name: 'Picasso in a Vermeer 1',
          nombre: 'Picasso en un Vermeer 1',
          imagePATH: require('../../assets/picasso-vermeer-1.jpg'),
          id: 10
        },
        {
          name: 'Picasso in a Vermeer 2',
          nombre: 'Picasso en un Vermeer 2',
          imagePATH: require('../../assets/picasso-vermeer-2.jpg'),
          id: 11
        },
        {
          name: 'Carlos and Crayons',
          nombre: 'Carlos y Crayolas',
          imagePATH: require('../../assets/carlos-and-crayons.jpg'),
          id: 12
        },
        {
          name: 'Picasso in Vermeer 4',
          nombre: 'Picasso en un Vermeer 4',
          imagePATH: require('../../assets/picasso-vermeer-4.jpg'),
          id: 13
        },
        {
          name: 'José Alfredo Jiménez',
          nombre: 'José Alfredo Jiménez',
          imagePATH: require('../../assets/jose-alfredo.jpg'),
          id: 14
        },
        {
          name: 'America',
          nombre: 'America',
          imagePATH: require('../../assets/mother-child.jpg'),
          id: 15
        },
        {
          name: 'Mercado Díaz',
          nombre: 'Mercado Díaz',
          imagePATH: require('../../assets/mercado.jpg'),
          id: 16
        },
        {
          name: 'Picasso in a Vermeer 3',
          nombre: 'Picasso en un Vermeer 3',
          imagePATH: require('../../assets/picasso-vermeer-3.jpg'),
          id: 17
        }
      ]
    };
  };

  render() {
    return (
      <div className='portfolio-spread'>
        <Link to="/"><HomeIcon /></Link>
        <CartIcon />
        { 
          this.props.hidden ? null :
          <CartDropdown />
        }
        <BurgerMenu />
        <div className="heading">
          <h1 className="my-name">Carlos Ibarra</h1>
          <div className="separator"></div>
          <h3 className="phrase">A Collection of Ideas, Paintings, Drawings and Sculptures</h3>
        </div>
        <div className='portfolio-items'>
          {this.state.sections.map(({ name, imagePATH, id }) => (
            <PortfolioItem key={id} title={name} imagePATH={imagePATH} />
          ))}
        </div>
        <Footer />
      </div>
    )
  };
};

const mapStateToProps = ({ dropdown: { hidden } }) => ({
  hidden
});

export default connect(mapStateToProps)(Portfolio);