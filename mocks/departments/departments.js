const faker = require('faker');
const uuidv4 = require('uuid/v4');

const generateDepartments = () => {
    let departments = [];

    for (let i = 0; i < 100; i++) {
        let id = uuidv4();
        let department = faker.commerce.department();
        
        const found = departments.filter(item => {
            return item.department === department
        })

        if(found.length === 0){
            departments.push({
                "id": id,
                "department": department
            })
        }
    }

    return {
        "departments": departments
    }

}

module.exports = generateDepartments