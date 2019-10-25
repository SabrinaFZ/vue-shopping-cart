import TYPES from '../constants';
import URL from '../../services/urls';

import services from '../../services';

export default {
    [TYPES.GET_PRODUCTS]({commit}){
        services[URL.PRODUCTS].get.getAllProducts().then( response => {
            response.map(product => {
                commit(TYPES.GET_PRODUCTS, product)
            })
        })
    },
    [TYPES.RESET_PRODUCTS]({commit}){
        commit(TYPES.RESET_PRODUCTS);
    },
    [TYPES.GET_DEPARTMENTS]({commit}){
        services[URL.DEPARTMENTS].get.getAllDepartments().then( response => {
            response.map(department => {
                commit(TYPES.GET_DEPARTMENTS, department);
            })
        })
    },
    [TYPES.RESET_DEPARTMENTS]({commit}){
        commit(TYPES.RESET_DEPARTMENTS);
    },
    [TYPES.GET_PRODUCTS_BY_CATEGORY]({commit}, category){
        commit(TYPES.RESET_PRODUCTS);
        services[URL.PRODUCTS].get.getProductsByCategory(category).then(response => {
            response.map(product => {
                commit(TYPES.GET_PRODUCTS, product)
            })
        })
    },
    [TYPES.ADD_SHOPPING_CART]({commit}, {qty, product}){
        commit(TYPES.ADD_SHOPPING_CART, {qty, product});
    },
    [TYPES.CHANGE_SHIPPING_ADDRESS]({commit}, {field, value}){
        commit(TYPES.CHANGE_SHIPPING_ADDRESS, {field, value})
    },
    [TYPES.CHANGE_PAYMENT_METHOD]({commit}, {field, value}){
        commit(TYPES.CHANGE_PAYMENT_METHOD, { field, value });
    },
    [TYPES.RESET_SHOPPING_CART]({commit}){
        commit(TYPES.RESET_SHOPPING_CART);
    },
    [TYPES.DELETE_PRODUCT_SHOPPING_CART]({commit}, product){
        commit(TYPES.DELETE_PRODUCT_SHOPPING_CART, product);
    },
    [TYPES.MODIFY_QTY_PRODUCT_SHOPPING_CART]({commit}, {qty, product}){
        commit(TYPES.MODIFY_QTY_PRODUCT_SHOPPING_CART, {qty, product})
    }
}