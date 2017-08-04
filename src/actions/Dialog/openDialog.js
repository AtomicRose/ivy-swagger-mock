import createAction from 'ACTION/createAction';
const defaults = {
  type: 'toast',
  isOpen: false,
  beforeCloseCall: '',
  afterCloseCall: '',
  enableOverlay: true,
  enableCloseByDocument: false,
  autoClose: 0,
  title: '',
  message: '',
  okText: '确定',
  cancelText: '取消'
};
function Dialog(opts) {
  if (opts.type === 'toast') {
    opts.autoClose = opts.autoClose || 2;
  }
  this.id = opts.id || new Date().getTime() + Math.random();
  this.createTime = new Date().getTime();
  this.options = Object.assign({}, defaults, opts);
};
function openDialog(opts) {
  return {
    payload: new Dialog(opts)
  };
}

export default createAction(openDialog);