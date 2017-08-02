import 'SCSS/_bootstrap.scss';
import 'SCSS/pages/index.scss';
import React from 'react';
import createPureComponent from 'UTIL/createPureComponent';

export default createPureComponent(({ children, location, state_apiSource }) => {
  return (
    <div>
      {children}
    </div>
  );
});
