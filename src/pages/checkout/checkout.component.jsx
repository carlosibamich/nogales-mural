import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal, selectCartHidden } from '../../redux/cart/cart.selectors';

import HeaderNav from '../../components/header-nav/header-nav.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Footer from '../../components/footer/footer.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page-container">
      <div className="header-nav">
        <HeaderNav />
      </div>
      <div className="checkout-content">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Title</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">
          <span>TOTAL: ${cartTotal}</span>
        </div>
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);