import state_apiSource from './APISource/index';
import state_dialog from './Dialog/index';
export default {
  initialState: {},
  children: {
    state_apiSource,
    state_dialog
  }
};