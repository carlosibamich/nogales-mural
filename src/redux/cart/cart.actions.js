import CartActionTypes from './cart.types';

export const toggleDropdownHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
//export to cart-icon.component

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})
//export to portfolio-item.component