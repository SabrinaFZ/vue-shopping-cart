import TYPES from '../constants';

export default {
    [TYPES.GET_PRODUCTS](state, product){
        product.price = (product.price % 1 === 0 ? Math.trunc(product.price) : product.price).toString()
        state.products.push(product);
    },
    [TYPES.RESET_PRODUCTS](state){
        state.products = [];
    },
    [TYPES.GET_DEPARTMENTS](state, department){
        state.departments.push(department);
    },
    [TYPES.RESET_DEPARTMENTS](state){
        state.departments = [];
    },
    [TYPES.ADD_SHOPPING_CART](state, {qty, product}){
        const productInShoppingCart = state.shoppingCart.find(item => product.id === item.id)
        if (productInShoppingCart){
            productInShoppingCart['quantity'] = productInShoppingCart['quantity'] + qty
        } else {
            state.shoppingCart.push({ ...product, quantity: qty })
        }
    },
    [TYPES.CHANGE_SHIPPING_ADDRESS](state, {field, value}){
        state.shippingAddress[field] = value;
    },
    [TYPES.CHANGE_PAYMENT_METHOD](state, {field, value}){
        state.paymentMethod[field] = value;
    },
    [TYPES.RESET_SHOPPING_CART](state){
        state.shoppingCart = []
    },
    [TYPES.DELETE_PRODUCT_SHOPPING_CART](state, product){
        state.shoppingCart = state.shoppingCart.filter(item => item !== product)
    },
    [TYPES.MODIFY_QTY_PRODUCT_SHOPPING_CART](state, {qty, product}){
        state.shoppingCart = state.shoppingCart.map(item => {
            if(item === product){
                item['quantity'] = qty;
            }
            return item;
        })
    }
}