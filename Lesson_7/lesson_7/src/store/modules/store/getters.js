import { calculateUpdatedPrice } from '../data/calculatePrice'

export default {
    getCurrency: ({ currencyRate }) => currencyRate,

    getCurrencyRate: ({ currencyRate,selectedCurrency }) => currencyRate
    .find( curRate => curRate.id === selectedCurrency)
    .rate,

    getStoreItemsList(state, getters) {
      return state.store.map(storeItem => ({
        ...storeItem,
        productPrice: calculateUpdatedPrice(storeItem.productPrice, getters.getCurrencyRate),
        
      }));
    },    
    getCartItemsList(state, getters) {
      if (state.cart.length > 0) {
        return state.store
          .filter(storeItem => state.cart.some(cartItem => cartItem.id === storeItem.id))
          .map(storeItem => ({
            ...storeItem,
            productPrice: calculateUpdatedPrice(storeItem.productPrice, getters.  getCurrencyRate),
            count: (state.cart.find(cartItem => cartItem.id === storeItem.id)).count,
            cartItemSum: (state.cart.find(cartItem => cartItem.id === storeItem.id)). count * calculateUpdatedPrice(storeItem.productPrice, getters.getCurrencyRate),
          }));
      } else {
        return null;
      }
    },
    
    getTotalSumInCart(state, getters) {        
        const cartItems = getters.getCartItemsList           
        if (cartItems && cartItems.length > 0) {
          return cartItems.reduce((acc, item) => {
            return acc + item.count * item.productPrice
          }, 0);
        } else {
          return 'No items in the cart'
        }
      }
      
      
}