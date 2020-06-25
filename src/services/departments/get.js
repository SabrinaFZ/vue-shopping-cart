import axios from 'axios';

export default {
  getAllDepartments: async () => {
    const response = await axios.get('api/departments');
    return response.data;
  }
};
