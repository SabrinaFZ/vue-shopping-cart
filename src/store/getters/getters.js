export default {
    products(state){
        return state.products;
    },
    departments(state){
        return state.departments.sort((departmentA, departmentB) => departmentA.department.localeCompare(departmentB.department));
    },
    product(state){
        return (id) => {
            return state.products.find(product => product.id === id);
        }
    },
    shoppingCart(state){
        return state.shoppingCart;
    },
    paymentMethod(state){
        return state.paymentMethod;
    },
    shippingAddress(state){
        return state.shippingAddress;
    }
}