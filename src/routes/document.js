import createLazyViewLoader from './createLazyViewLoader';
export default {
  path: 'document',
  component: createLazyViewLoader(cb => {
    require.ensure([], require => cb(require('VIEW/Empty')));
  }),
  indexRoute: {
    component: createLazyViewLoader(cb => {
      require.ensure([], require => cb(require('VIEW/Document/index')));
    })
  },

  childRoutes: []
};