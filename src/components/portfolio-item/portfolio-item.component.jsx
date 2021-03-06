import React from 'react';
import { withRouter } from 'react-router-dom';


import './portfolio-item.styles.scss';


const PortfolioItem = ({ item, history, match }) => {
  const { name, imagePATH, routeName } = item;
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
          <h1 className='title'>{name.toUpperCase()}</h1>
          <h3 className='view-info'>Click to view full image</h3>
        </div>
      </div>
    </div>
  )
};

export default withRouter(PortfolioItem);
//export to portfolio.component