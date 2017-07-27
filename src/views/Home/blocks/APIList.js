import 'SCSS/pages/api.scss';
import React from 'react';
import highlight from 'ACTION/highlight';
class APIList extends React.PureComponent {
  componentDidMount() {
    highlight();
  }
  componentDidUpdate() {
    highlight();
  }
  handleReturnToTop() {
    window.scrollTo(0, 0);
  }
  render() {
    let apiObj = this.props.apiSourceFetch.response || {};
    let paths = apiObj.paths;
    let pathArray = [];
    let resObj = {};
    for (let key in paths) {
      let currentPathObj = paths[key];
      for (let skey in currentPathObj) {
        let sPathObj = currentPathObj[skey];
        let tag = sPathObj.tags && sPathObj.tags.length && sPathObj.tags[0] || 'Other';
        if (!resObj[tag]) {
          resObj[tag] = [];
        }
        resObj[tag].push({
          path: key,
          type: skey,
          obj: sPathObj
        });
      }
    }
    for (let ak in resObj) {
      pathArray.push({
        tag: ak,
        list: resObj[ak]
      });
    }
    return (
      <div className="col-md-12 ivy-api-page">
        {
          pathArray && pathArray.length > 0 && pathArray.map((item, i) => {
            let apiList = [];
            let list = item.list;
            for (let j = 0; j < list.length; j++) {
              let currentApi = list[j];
              let sObj = currentApi.obj;

              let requestParams = {
                header: [],
                path: [],
                query: [],
                body: []
              };
              let parameters = sObj.parameters || [];
              for (let k = 0; k < parameters.length; k++) {
                let p = parameters[k];
                requestParams[p.in].push(<tr key={p.in + k}>
                  <td>{p.name}</td>
                  <td>{p.type}</td>
                  <td><span className={p.required ? 'text-success' : ''}>{p.required ? 'true' : 'false'}</span></td>
                  <td>{p.description}</td>
                </tr>);
              }

              let examples = [];
              let responses = sObj.responses;
              for (let m in responses) {
                let ce = responses[m];
                examples.push(<div className="response-item" key={m}>
                  <h5>{'【' + m + '】' + ce.description} <span className="label label-default">{ce.schema.type}</span></h5>
                  <pre>
                    <code>
                      {JSON.stringify(ce.schema.example, null, 2)}
                    </code>
                  </pre>
                </div>);
              }

              apiList.push(<div className={'once-api once-api-' + (currentApi.type || 'default')} key={j} id={currentApi.type + currentApi.path}>
                <div className="col-md-12">
                  <h4><span className={"label " + (currentApi.type === 'get' ? 'label-info' : (currentApi.type === 'post') ? 'label-success' : (currentApi.type === 'put' ? 'label-warning' : (currentApi.type === 'delete' ? 'label-danger' : 'label-default')))} style={{ marginRight: '10px' }}>{currentApi.type}</span>{currentApi.path}{sObj.summary}</h4>
                  <p>{sObj.description}</p>
                </div>
                <div className="col-sm-12 col-md-6">
                  <h4>Request Prams</h4>
                  {requestParams && requestParams.header && requestParams.header.length > 0 && <div className="request-header">
                    <h5>Header</h5>
                    <div className="table-responsive">
                      <table className="table table-hover table-condensed">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Required</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {requestParams.header}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  }
                  {requestParams && requestParams.path && requestParams.path.length > 0 && <div className="request-path">
                    <h5>Path</h5>
                    <div className="table-responsive">
                      <table className="table table-hover table-condensed">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Required</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {requestParams.path}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  }
                  {requestParams && requestParams.query && requestParams.query.length > 0 && <div className="request-query">
                    <h5>Query</h5>
                    <div className="table-responsive">
                      <table className="table table-hover table-condensed">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Required</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {requestParams.query}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  }
                  {requestParams && requestParams.body && requestParams.body.length > 0 && <div className="request-body">
                    <h5>Body</h5>
                    <div className="table-responsive">
                      <table className="table table-hover table-condensed">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Required</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {requestParams.body}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  }

                </div>
                <div className="col-sm-12 col-md-6">
                  <h4>ResponseExample</h4>
                  {examples}
                </div>
              </div>);
            }
            return (<div className="row once-tag" key={i}>
              <div className="col-md-12" id={item.tag}>
                <h3>{item.tag}</h3>
              </div>
              {apiList}
              <div className="return-to-top" onClick={() => this.handleReturnToTop()}>返回顶部</div>
            </div>);
          })
        }
      </div>
    );
  }
}
export default APIList;