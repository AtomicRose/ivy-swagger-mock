import 'SCSS/_bootstrap.scss';
import 'SCSS/pages/index.scss';
import React from 'react';
import Header from 'VIEW/Layout/Header';
import Footer from 'VIEW/Layout/Footer';
import Sidebar from 'VIEW/Layout/Sidebar';
import createPureComponent from 'UTIL/createPureComponent';

export default createPureComponent(({ children, location, state_apiSource }) => {
  return (
    <div>
      <Header {...state_apiSource } />
      <div className="ivy-flex-main">
        <div className="col-sm-12 col-md-3 col-lg-2 ivy-side-nav">
          <Sidebar {...state_apiSource} />
        </div>
        <div className="col-sm-12 col-md-9 col-lg-10 ivy-content" id="ivyContent">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
});
