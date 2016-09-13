import * as types from './ActionTypes';

export function addItem(item) {
  return { type: types.ADD_ITEM, item };
}
