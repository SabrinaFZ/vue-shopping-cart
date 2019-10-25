import axios from 'axios';

const getAllProducts = async () => {
    const response = await axios.get(`${process.env.VUE_APP_LOCALHOST_API}${process.env.VUE_APP_PRODUCTS}`);
    return response.data.products;
}

const getProductsByCategory = async(category) => {
    const response = await axios.get(`${process.env.VUE_APP_LOCALHOST_API}${process.env.VUE_APP_PRODUCTS}`);

    const products = response.data.products.filter(product => { 
        return product.department === category 
    });
    return products;
}

export {
    getAllProducts,
    getProductsByCategory
}