import { ADD_FLASH_MESSAGE } from '../actions/ActionTypes';


const initialState = {
  list: []
};

export default function flashMessages(state = initialState, action) {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return {
        list: state.list.concat({
          text: action.message,
          timestamp: Date.now()
        })
      };
    default:
      return state;
  }
}
