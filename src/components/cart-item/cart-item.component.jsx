import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { name, imagePATH, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imagePATH} alt="art image"/>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="amount">{quantity}: ${`${quantity * price}`}</span>
      </div>
    </div>
  )
};

export default CartItem;
// export to cart-dropdown.component