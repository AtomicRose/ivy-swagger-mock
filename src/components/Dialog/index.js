import React from 'react';
import closeDialog from 'ACTION/Dialog/closeDialog';

let dialogT = {};
class Dialogs extends React.PureComponent {
  handleCloseDialog(opts, type) {
    if (opts.beforeCloseCall && typeof opts.beforeCloseCall === 'function') {
      if (opts.beforeCloseCall(type)) {
        closeDialog(opts.id);
        opts.afterCloseCall && typeof opts.afterCloseCall === 'function' && opts.afterCloseCall(type);
      }
    } else {
      closeDialog(opts.id);
      opts.afterCloseCall && typeof opts.afterCloseCall === 'function' && opts.afterCloseCall(type);
    }
  }
  renderDialogHtml(item, i) {
    if (item.reOpen && dialogT[item.id]) {
      clearTimeout(dialogT[item.id]);
      delete dialogT[item.id];
    }

    if (item.options.autoClose && !dialogT[item.id]) {
      dialogT[item.id] = setTimeout(() => {
        this.handleCloseDialog(item.options, 'auto');
        delete dialogT[item.id];
      }, item.options.autoClose * 1000);
    }
    let opts = item.options;
    let id = item.id;
    let html = <div key={i} className="ivy-dialog">
      {opts.type !== 'toast' && <div>title: {opts.title}</div>}
      <div>content: {opts.message}</div>
      {opts.type === 'confirm' && <button type="button" className="btn btn-sm btn-default" onClick={() => this.handleCloseDialog(opts, 'cancel')}>取消</button>}
      {opts.type !== 'toast' && <button type="button" className="btn btn-sm btn-info" onClick={() => this.handleCloseDialog(opts, 'ok')}>确定</button>}
    </div>;
    return html;
  }
  render() {
    let dialogs = this.props.items || [];
    return (
      <div>
        <div className="mask">mask</div>
        {
          dialogs.map((item, i) => {
            return this.renderDialogHtml(item, i);
          })
        }
      </div>
    );
  }
}
export default Dialogs;