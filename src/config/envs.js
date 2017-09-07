let env;
if (__PROD__) {
  env = {
    envName: 'production',
    api_url: {
      sourceApiDomain: 'http://api.nmirage.cc'
    }
  };
  // window.envs = envs;
  window.env = env;
}
if (__ALPHA__) {
  env = {
    envName: 'alpha',
    api_url: {
      sourceApiDomain: 'http://api.nmirage.cc'
    }
  };
}
if (__TEST__) {
  env = {
    envName: 'test',
    api_url: {
      sourceApiDomain: 'http://api.nmirage.cc'
    }
  };
}
if (__DEV__) {
  env = {
    envName: 'development',
    api_url: {
      sourceApiDomain: 'http://api.nmirage.cc'
    }
  };
}
export default env;