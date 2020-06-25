import { GET_DEPARTMENTS, RESET_DEPARTMENTS } from '@/store/constants';
import api from '@/services';

export default {
  [GET_DEPARTMENTS]: ({ commit }) => {
    api.getAllDepartments().then(response => {
      response.forEach(department => {
        commit(GET_DEPARTMENTS, department);
      });
    });
  },
  [RESET_DEPARTMENTS]: ({ commit }) => {
    commit(RESET_DEPARTMENTS);
  }
};
