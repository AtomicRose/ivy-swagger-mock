import React from 'react';
import createPureComponent from 'UTIL/createPureComponent';
import getSourceApiJson from 'ACTION/APISource/getSourceApiJson';

class Header extends React.PureComponent {
  componentDidMount() {
    getSourceApiJson({
      path: '/crm/docs/v1/swagger.json'
    });
  }
  render() {
    let apiObj = this.props.apiSourceFetch.response || {};
    return (<div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="javascript:void(0)" className="navbar-brand">Swagger-Mock</a>
          </div>
          <div className="collapse navbar-collapse">
            {
              apiObj && apiObj.info && <p className="navbar-text navbar-right">{apiObj.info.title} <span className="label label-success">{apiObj.info.version}</span></p>
            }
          </div>
        </div>
      </nav>
    </div>);
  }
}
export default Header;
