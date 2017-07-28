import getSourceApiJson from 'ACTION/APISource/getSourceApiJson';
import isShowMock from 'ACTION/APISource/isShowMock';
import merge from '../merge';
const HeaderReducer = {
  initialState: {
    sourceApiList: [],
    showMockKey: '',
    apiSourceFetch: {
      pending: 0,
      response: '',
      status: ''
    },
    mockDataObj: {}
  },
  reducers: {
    [isShowMock]: merge((payload) => {
      return {
        showMockKey: payload || ''
      };
    }),
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