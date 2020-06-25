export default {
  dataProducts: state => field => state[field],
  getProduct: state => id => state.products.find(product => product.id === id)
};
