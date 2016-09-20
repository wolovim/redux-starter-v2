import * as types from './ActionTypes';


export function addItem(item) {
  return dispatch => {
    dispatch(addFlashMessage(`Successfully added ${item}!`, 'notification'));
    dispatch(addItemSuccess(item));
  };
}

export function addItemSuccess(item) {
  return { type: types.ADD_ITEM, item };
}

export function addFlashMessage(text, messageType = 'error') {
  return { type: types.ADD_FLASH_MESSAGE, text, messageType };
}

export function dismissFlashMessage(stamp) {
  return dispatch => {
    // NOTE: Without this timeout, a bug occurs that causes one
    // or more closely-timed flash messages to get skipped over.
    setTimeout(() => {
      dispatch(deleteFlashMessage(stamp));
    }, 500);
  };
}

export function deleteFlashMessage(timestamp) {
  return { type: types.DELETE_FLASH_MESSAGE, timestamp };
}
