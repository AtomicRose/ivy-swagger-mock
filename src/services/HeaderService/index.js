import HttpRequest from 'UTIL/request';
import env from 'CONFIG/envs';

const SOURCE_API_DOMAIN = env.api_url.sourceApiDomain;
let baseToDo = {
  successDo: (res) => {
    return res;
  },
  errorDo: (res) => {
    // maybe you could dialog the res.message
    return res;
  }
};
let HeaderService = {
  getSourceApiJson: (params) => {
    return HttpRequest.get({
      url: SOURCE_API_DOMAIN + (params.path || ''),
      params: {}
    }, baseToDo);
  }
};
export default HeaderService;