import getSourceApiJson from 'ACTION/Header/getSourceApiJson';
import merge from '../merge';
const HeaderReducer = {
  initialState: {
    sourceApiList: []
  },
  reducers: {
    [getSourceApiJson]: merge(() => {
      return {
        pending: true
      };
    }),
    [getSourceApiJson.success]: merge((payload, state) => {
      return {
        pending: false,
        response: payload,
        status: 'success'
      };
    }),
    [getSourceApiJson.error]: merge((payload, state) => {
      return {
        pending: false,
        response: payload,
        status: 'error'
      };
    })
  }
};
export default HeaderReducer;