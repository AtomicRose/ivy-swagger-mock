import createAction from 'ACTION/createAction';
// aybe you could import the get doclist services. 
function isShowMock(apiKey) {
  return {
    payload: apiKey
  };
}

export default createAction(isShowMock);