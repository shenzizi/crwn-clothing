import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51HLVYMCFXZGA2KjuU8xbq81YkYI0XB9YcVcjsBdY6oHZHRe4m7ujbdECh1f22lbus30iLm2K8PQuFcu8mXa8F7kk00h0jQp7NK";


  const onToken = token => {
    console.log('token');
    alert('Payment successful!');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN clothing Ltd.'
      billlingAddress
      shippingAddress
      image='https://svgshare.com/u/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
