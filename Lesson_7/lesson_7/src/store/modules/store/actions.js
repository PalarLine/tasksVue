import itemsList from "../data/itemsList"

export default {
    loadItemsList({commit}) {
        commit('updateItemsList', itemsList)
      },
      addItemToCart({commit}, item) {
        commit('updateAddItemToCart', item.id)
      },
      deleteItemFromCart({commit}, itemId) {
        commit('updateDeleteItem', itemId)
      },
      changeCurrency({commit}, currencyID) {
        commit('updateCurrency', currencyID)
      }
}