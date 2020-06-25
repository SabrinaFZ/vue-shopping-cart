import { GET_DEPARTMENTS, RESET_DEPARTMENTS } from '@/store/constants';

export default {
  [GET_DEPARTMENTS]: (state, department) => {
    state.departments.push(department);
  },
  [RESET_DEPARTMENTS]: state => {
    state.departments = [];
  }
};
