// import {   injectReducer } from 'REDUCER'; import createContainer from
// 'UTIL/createContainer'
import createLazyViewLoader from './createLazyViewLoader';

// 引入需要模块的路由
import homeRoute from './Home/index';
import documentRoute from './document';

export default {
  path: '/',
  indexRoute: {
    component: createLazyViewLoader(cb => {
      require.ensure([], require => cb(require('VIEW/Home/index')));
    })
  },

  childRoutes: [
    // 加载子模块路由
    homeRoute,
    documentRoute,

    // 重定向
    {
      path: 'redirect',
      component: createLazyViewLoader(cb => {
        require.ensure([], require => cb(require('VIEW/Redirect')));
      })
    },

    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    {
      path: '*',
      component: createLazyViewLoader(cb => {
        require.ensure([], require => cb(require('VIEW/404')));
      })
    }
  ]
};
