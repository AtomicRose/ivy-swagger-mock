import 'SCSS/_bootstrap.scss';
import 'SCSS/pages/index.scss';
import React from 'react';
import Header from 'VIEW/Layout/Header';
import Footer from 'VIEW/Layout/Footer';
import createPureComponent from 'UTIL/createPureComponent';

export default createPureComponent(({ children, location, state_header }) => {
  return (
    <div>
      <Header {...state_header } />
      <div className="ivy-flex-main">
        <div className="ivy-side-nav">abc</div>
        <div className="ivy-content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
});
