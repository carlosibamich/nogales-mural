export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
// export to cart.reducer

export const clearItemFromCart = (cartItems, cartItemsToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id)
};
// export to cart.reducer

export const removeItemFromCheckout = (checkoutItems, checkoutItemToRemove) => {
  const existingCheckoutItem = checkoutItems.find(
    checkoutItem => checkoutItem.id === checkoutItemToRemove.id
  );

  if (existingCheckoutItem.quantity === 1) {
    return checkoutItems.filter(checkoutItem => checkoutItem.id !== checkoutItemToRemove.id);
  }

  return checkoutItems.map(checkoutItem => checkoutItem.id === checkoutItemToRemove.id ? { ...checkoutItem, quantity: checkoutItem.quantity - 1 } : checkoutItem);
};