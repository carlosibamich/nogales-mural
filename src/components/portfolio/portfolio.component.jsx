import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPortfolio } from '../../redux/collection/collection.selectors';

import Signature from '../../assets/signature.svg';
import HeaderNav from '../header-nav/header-nav.component';
import PortfolioItem from '../portfolio-item/portfolio-item.component';
import Footer from '../footer/footer.component';

import './portfolio.styles.scss';

const Portfolio = ({ artCollection }) => {
  return (
    <div className='portfolio-spread'>
      <HeaderNav />
      <div className="heading">
        <img className="my-name" src={Signature} />
        <div className="separator"></div>
        <h3 className="phrase">A Collection of Ideas, Paintings, Drawings and Sculptures by <span>Carlos Ibarra</span></h3>
      </div>
      <div className='portfolio-items'>
        {artCollection.map(item => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  artCollection: selectCollectionForPortfolio
});

export default connect(mapStateToProps)(Portfolio);
// export to collection.component