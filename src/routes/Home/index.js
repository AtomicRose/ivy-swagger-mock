import createLazyViewLoader from '../createLazyViewLoader';
export default {
  path: 'swagger-mock',
  component: createLazyViewLoader(cb => {
    require.ensure([], require => cb(require('VIEW/App')));
  }),
  indexRoute: {
    component: createLazyViewLoader(cb => {
      require.ensure([], require => cb(require('VIEW/Home/index')));
    })
  },

  childRoutes: []
};