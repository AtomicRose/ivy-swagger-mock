import React from 'react';

class Sidebar extends React.PureComponent {
  handleScrollTo(summary) {
    let ele = document.getElementById(summary);
    if (ele) {
      let offsetTop = document.getElementById(summary).offsetTop;
      // 52 px is the navbar height
      window.scrollTo(0, offsetTop + 52);
    }
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
    return (<div>
      {
        pathArray && pathArray.length > 0 && pathArray.map((item, i) => {
          let apiList = [];
          let list = item.list;
          for (let j = 0; j < list.length; j++) {
            let sItem = list[j];
            apiList.push(<p onClick={() => this.handleScrollTo(sItem.type + sItem.path)} className="side-nav-item" key={j}><span style={{ marginRight: '10px' }} className={"label " + (sItem.type === 'get' ? 'label-info' : (sItem.type === 'post') ? 'label-success' : (sItem.type === 'put' ? 'label-warning' : (sItem.type === 'delete' ? 'label-danger' : 'label-default')))}>{sItem.type}</span>{sItem.obj.summary}</p>);
          }
          return (<div key={i}><h4 onClick={() => this.handleScrollTo(item.tag)}>{item.tag}</h4>{apiList}</div>);
        })
      }
    </div>);
  }
}
export default Sidebar;
