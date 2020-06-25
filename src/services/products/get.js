import axios from 'axios';

export default {
  getAllProducts: async () => {
    const response = await axios.get('api/products');
    return response.data;
  },
  getProductsByCategory: async category => {
    const response = await axios.get('api/products');
    const products = response.data.filter(product => product.department === category);
    return products;
  }
};
