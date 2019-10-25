
const generateProducts = require('./products/products');
const generateClients = require('./clients/clients');
const generateDepartments = require('./departments/departments');

module.exports = () => {
    return {
        products: generateProducts(),
        clients: generateClients(),
        departments: generateDepartments()
    }
};


