import * as types from './ActionTypes';


export function addItem(item) {
  return { type: types.ADD_ITEM, item };
}

export function addFlashMessage(message) {
  return { type: types.ADD_FLASH_MESSAGE, message };
}
