import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';
import HomeIcon from '../../components/home-icon/home-icon.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import BurgerMenu from '../../components/burger-menu/burger-menu.component';
import Footer from '../../components/footer/footer.component';

import './portfolio.styles.scss';

const Portfolio = ({ artCollection, hidden }) => {
  return (
    <div className='portfolio-spread'>
      <Link to="/">
        <HomeIcon />
      </Link>
      <CartIcon />
      { hidden ? null : <CartDropdown /> }
      <BurgerMenu />
      <div className="heading">
        <h1 className="my-name">Carlos Ibarra</h1>
        <div className="separator"></div>
        <h3 className="phrase">A Collection of Ideas, Paintings, Drawings and Sculptures</h3>
      </div>
      <div className='portfolio-items'>
        {artCollection.map(item => (
          <PortfolioItem key={item.id} item={item} />
        ))};
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = ({ cart: { hidden }, collection: { artCollection } }) => ({
  hidden,
  artCollection
});

export default connect(mapStateToProps)(Portfolio);