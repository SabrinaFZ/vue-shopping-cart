import axios from 'axios';

const getAllDepartments = async() => {
    const response = await axios.get(`${process.env.VUE_APP_LOCALHOST_API}${process.env.VUE_APP_DEPARTMENTS}`);
    return response.data.departments;
}

export {
    getAllDepartments
}