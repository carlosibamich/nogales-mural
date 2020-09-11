import React from 'react';
import { Route } from 'react-router-dom';

import Portfolio from '../../components/portfolio/portfolio.component';
import PortfolioFeature from '../portfolio-feature/portfolio-feature.component';

import './collection.styles.scss';

const Collection = ({ match }) =>  {
  return (
    <div className="collection-container">
      <Route 
        exact 
        path={`${match.path}`} 
        component={Portfolio} 
      />
      <Route 
        path={`${match.path}/:collectionId`} 
        component={PortfolioFeature} 
      />
    </div>
  );
};

export default Collection;
//export to App.js