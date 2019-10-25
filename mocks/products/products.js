const faker = require('faker');
const uuidv4 = require('uuid/v4');

const generateProducts = () => {
    let products = [];

    for(let i=0; i < 100; i++){
        let id = uuidv4();
        let productName = faker.commerce.productName();
        let color = faker.commerce.color();
        let product = faker.commerce.product();
        let department = faker.commerce.department();
        let price = faker.commerce.price();
        let imageUrl = faker.image.imageUrl();

        products.push({
            "id": id,
            "productName": productName,
            "color": color,
            "productName": productName,
            "department": department,
            "product": product,
            "price": price,
            "imageUrl": imageUrl
        })
    }

    return {
        "products": products
    }

}

module.exports = generateProducts