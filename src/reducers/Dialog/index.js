import merge from '../merge';
import openDialog from 'ACTION/Dialog/openDialog';
import closeDialog from 'ACTION/Dialog/closeDialog';

const DialogStore = {
  initialState: {
    dialogs: []
  },
  reducers: {
    [openDialog]: merge((payload, state) => {
      let temp = state.dialogs;
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === payload.id) {
          temp.splice(i, 1);
          payload.reOpen = true;
          break;
        }
      }
      temp.push(payload);
      return {
        dialogs: temp
      };
    }),
    [closeDialog]: merge((payload, state) => {
      if (payload.id === 'A' || payload.id === 'ALL' || payload.id === 'all') {
        return {
          dialogs: []
        };
      }
      let temp = state.dialogs;
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === payload.id) {
          temp.splice(i, 1);
          break;
        }
      }
      return {
        dialogs: temp
      };
    })
  }
};
export default DialogStore;