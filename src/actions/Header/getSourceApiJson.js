import createAction from 'ACTION/createAction';
import HeaderService from 'SERVICE/HeaderService/index';
// aybe you could import the get doclist services. 
function getSourceApiJson(params) {
  return {
    promise: HeaderService.getSourceApiJson(params)
  };
}

export default createAction(getSourceApiJson);