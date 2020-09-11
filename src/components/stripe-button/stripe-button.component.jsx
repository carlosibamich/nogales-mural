import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import Logo from '../../assets/site-logo.svg'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_iUuhkBGn46ZyDuMg339q9WgG00UmAz1Wnl';

  const onToken = token => {
    console.log(token);
    alert('Thank you! Your payment was successful');
  }

  return (
    <StripeCheckout 
      label="Click to Pay"
      name="Nogales Mural"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Here"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
// export to checkout.component