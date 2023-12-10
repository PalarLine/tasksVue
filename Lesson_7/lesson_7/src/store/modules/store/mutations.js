
export default {
    updateItemsList(state, list) {
        state.store = list
      },  
      updateAddItemToCart(state, id) {
        let cartItem = state.cart.find((elem) => elem.id === id)  
        if (!cartItem) {
          state.cart.push({ id, count: 1 })
        } else {
          cartItem.count++
        }
      },
      updateDeleteItem(state, id)  {
        let cartItem = state.cart.find((elem) => elem.id === id)
        if (cartItem.count > 1) {
          cartItem.count--
        } else
        state.cart = state.cart.filter((item) => item.id !== id)     
      },
      updateCurrency(state, curID) {
        state.selectedCurrency = curID
      }
}