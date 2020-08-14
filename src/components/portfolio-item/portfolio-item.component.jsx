import React from 'react';

import './portfolio-item.styles.scss';


const PortfolioItem = ({ title, imagePATH }) => {
  return (
    <div id='item-container'>
      <div className='portfolio-image'>
        <div 
          style={{ backgroundImage: `url(${imagePATH})`}}
          className='art-bg' />
      </div>
      <div className='content-container'>
        <div className='content'>
          <h2 className='title-intro'>Title</h2>
          <h1 className='title'>{title.toUpperCase()}</h1>
        </div>
      </div>
    </div>
  )
};

export default PortfolioItem;
//export to portfolio.component.jsx