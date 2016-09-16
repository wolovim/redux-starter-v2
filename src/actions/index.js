import * as types from './ActionTypes';


export function addItem(item) {
  return dispatch => {
    dispatch(addFlashMessage(`Successfully added ${item}!`, 'notification'));
    dispatch(addItemSuccess(item));
  }
}

export function addItemSuccess(item) {
  return { type: types.ADD_ITEM, item };
}

export function addFlashMessage(text, messageType = 'error') {
  return { type: types.ADD_FLASH_MESSAGE, text, messageType };
}
