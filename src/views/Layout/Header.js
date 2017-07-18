import React from 'react';
import createPureComponent from 'UTIL/createPureComponent';
import getSourceApiJson from 'ACTION/Header/getSourceApiJson';

class Header extends React.PureComponent {
  componentDidMount() {
    getSourceApiJson({
      path: '/bd-assistant/docs/v1/swagger.json'
    });
  }
  render() {
    return (<div>This is Header</div>);
  }
}
export default Header;
