import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
//export to cart-icon.component and cart-dropdown.component

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})
//export to portfolio-item.component

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})


export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})
//export to checkout-item.component
