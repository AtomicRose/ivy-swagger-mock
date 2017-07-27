import getSourceApiJson from 'ACTION/APISource/getSourceApiJson';
import merge from '../merge';
const HeaderReducer = {
  initialState: {
    sourceApiList: [],
    apiSourceFetch: {
      pending: 0,
      response: '',
      status: ''
    }
  },
  reducers: {
    [getSourceApiJson]: merge(() => {
      return {
        apiSourceFetch: {
          pending: 1
        }
      };
    }),
    [getSourceApiJson.success]: merge((payload) => {
      return {
        apiSourceFetch: {
          pending: -1,
          response: payload,
          status: 'success'
        }
      };
    }),
    [getSourceApiJson.error]: merge((payload) => {
      return {
        apiSourceFetch: {
          pending: -1,
          response: payload,
          status: 'error'
        }
      };
    })
  }
};
export default HeaderReducer;