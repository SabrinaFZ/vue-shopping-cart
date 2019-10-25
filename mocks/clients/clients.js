const faker = require('faker');
const uuidv1 = require('uuid/v1');

const generateClients = () => {
    let clients = [];

    for (let i = 0; i < 50; i++) {
        let id = uuidv1();
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let avatar = faker.internet.email();
        let city = faker.address.city();
        let streetAddress = faker.address.streetAddress();
        let country = faker.address.country();
        let phoneNumber = faker.phone.phoneNumber();

        clients.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "avatar": avatar,
            "city": city,
            "streetAddress": streetAddress,
            "country": country,
            "phoneNumber": phoneNumber
        })
    }

    return {
        "clients": clients
    }

}

module.exports = generateClients