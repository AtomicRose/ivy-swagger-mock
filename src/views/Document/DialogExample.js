import React from 'react';
import Dialogs from 'COMPONENT/Dialog';
import openDialog from 'ACTION/Dialog/openDialog';
import closeDialog from 'ACTION/Dialog/closeDialog';
class DialogExample extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  handleDialog(type, id) {
    openDialog({
      id: id,
      type: type,
      message: 'I click ' + type + 'ID is:' + id,
      beforeCloseCall: function (value) {
        console.log('如果我不返回true，则不会关闭dialog');
        if (type === 'confirm' && value === 'ok') {
          console.log('这里点击了confirm, 在关闭前我做了判断。暂时这里返回false, 表示不能关闭');
          return false;
        }
        return true;
      },
      afterCloseCall: function (value) {
        console.log('我通过点击了' + value + '的方式关闭了');
      }
    });
  }
  handleCloseDialog(id) {
    closeDialog(id);
  }
  render() {
    return (
      <div>
        <button className="btn btn-info" onClick={() => this.handleDialog('alert', 1)}>alert</button>
        <button className="btn btn-info" onClick={() => this.handleDialog('confirm', 2)}>confirm</button>
        <button className="btn btn-info" onClick={() => this.handleDialog('toast', 3)}>toast</button>
        <button className="btn btn-info" onClick={() => this.handleDialog('toast', 4)}>toast2</button>
        <button className="btn btn-danger" onClick={() => this.handleCloseDialog(1)}>close alert</button>
        <button className="btn btn-danger" onClick={() => this.handleCloseDialog(2)}>close confirm</button>
        <button className="btn btn-danger" onClick={() => this.handleCloseDialog(3)}>close toast</button>
        <button className="btn btn-danger" onClick={() => this.handleCloseDialog('all')}>close all dialog</button>
        <Dialogs items={this.props.state_dialog.dialogs} />
      </div>
    );
  }
}

export default DialogExample;