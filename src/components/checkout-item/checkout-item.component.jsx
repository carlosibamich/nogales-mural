import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imagePATH, quantity, price } }) => {
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imagePATH} alt="art item"/>
      </div>
  <span className="name">{name}</span>
  <span className="quantity">{quantity}</span>
  <span className="price">${price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
};

export default CheckoutItem;
// export to checkout.component