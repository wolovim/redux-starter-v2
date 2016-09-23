import { filter } from 'lodash';
import {
  FLASH_MESSAGE__CREATE,
  FLASH_MESSAGE__DELETE
} from '../actions/ActionTypes';


const initialState = {
  list: []
};

export default function flashMessages(state = initialState, action) {
  switch (action.type) {
    case FLASH_MESSAGE__CREATE:
      return {
        list: state.list.concat({
          text: action.text,
          messageType: action.messageType,
          timestamp: Date.now()
        })
      };
    case FLASH_MESSAGE__DELETE:
      return {
        list: filter(state.list, message => {
          return message.timestamp !== action.timestamp;
        })
      };
    default:
      return state;
  }
}
