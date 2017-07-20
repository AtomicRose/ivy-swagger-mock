let env;
if (__PROD__) {
  env = {
    envName: 'production',
    api_url: {
      sourceApiDomain: 'http://services.dev.mingyizhudao.com'
    }
  };
  // window.envs = envs;
  window.env = env;
}
if (__ALPHA__) {
  env = {
    envName: 'alpha',
    api_url: {
      sourceApiDomain: 'http://services.dev.mingyizhudao.com'
    }
  };
}
if (__TEST__) {
  env = {
    envName: 'test',
    api_url: {
      sourceApiDomain: 'http://services.dev.mingyizhudao.com'
    }
  };
}
if (__DEV__) {
  env = {
    envName: 'development',
    api_url: {
      sourceApiDomain: 'http://services.dev.mingyizhudao.com'
    }
  };
}
export default env;