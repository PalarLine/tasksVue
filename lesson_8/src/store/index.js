import { createStore } from "vuex"
//======task-1===================================================
import products from '../data/high-pressure-washers.json'
import categoriesOfProducts from '../data/categories-of-goods.json'
//=====task-2====================================================
import  cars_shop_list  from "../data/cars_shop_list.json"
import { getSetFromData }  from "./helper"
import { matchToFilter } from './helper'

export default createStore({
  state: {
  //=======task-1===============================================
  
    productsList: [],
    productsCategory: [],        
  
  //======task-2==================================================
      carsList: [],      
      filters: {},      
  },
  getters: {
  //========task-1================================================
    productsList:({productsList}) => productsList,
    productsCategory: ({productsCategory}) => productsCategory,
  //=========task-2===============================================
    getCarsList: ({ carsList }) => carsList,

    getCarsTypes: ({ carsList }) => {
      return getSetFromData(carsList, 'type')
    },

    getCarsTypeBody: ({ carsList }) => {
      return getSetFromData(carsList, 'bodytype')
    },

    getCarsBrand: ({ carsList }) => {
      return getSetFromData(carsList, 'brand')
    },

    getCarsModel: ({ carsList }) => {
      return getSetFromData(carsList, 'model')
    }, 

    getFilteredCarsList (state) {     
        let copyCarsList = [...state.carsList]
        return copyCarsList.filter((car) =>
                matchToFilter(car, state.filters))  
    },
  },

  mutations: {
  //========task-1=====================================
  setProductsList(state, products) {
    state.productsList = products
  },
  setProductCategory(state, categories) {
    state.productsCategory = categories
  },
  //=======task-2======================================
    setCarsList(state, carsData) {
      state.carsList = carsData
    },
    
    setFilters(state, selectedFilters ) {
      
      state.filters = selectedFilters
    },

    filteredList(state, selectedFilters) {
      if (Object.keys(state.carsList) == Object.keys(selectedFilters)
          && Object.values(state.carsList) == Object.values(selectedFilters)) {
            state.filteredList.push(...state.carsList)}
    }
    
  },
  actions: {
  //======task-1============================================
    loadProductsList({commit}) {
      commit('setProductsList', products)
    },
    loadProductCategory({commit}) {
      commit('setProductCategory', categoriesOfProducts)
    },
   //=======task-2==============================================
    loadCarsList({commit}) {
      commit('setCarsList', cars_shop_list)
    },
    
    addFilters({commit}, selectedFilters) {
      commit('setFilters', selectedFilters)
     
    }    
  },
  modules: {},
})



