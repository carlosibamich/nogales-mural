import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectArtCollection } from '../../redux/collection/collection.selectors';

import HeaderNav from '../../components/header-nav/header-nav.component';
import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';
import Footer from '../../components/footer/footer.component';

import './portfolio.styles.scss';

const Portfolio = ({ artCollection }) => {
  return (
    <div className='portfolio-spread'>
      <HeaderNav />
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

const mapStateToProps = createStructuredSelector({
  artCollection: selectArtCollection
});

export default connect(mapStateToProps)(Portfolio);