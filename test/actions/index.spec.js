import * as actions from '../../src/actions/';
import * as types from '../../src/actions/ActionTypes';


describe('actions', () => {
  it('should create an action to add an item', () => {
    const item = 'example two';
    const expectedAction = {
      type: types.ADD_ITEM,
      item
    };

    expect(actions.addItemSuccess(item)).toEqual(expectedAction);
  });

  it('should create an action to add a flash message', () => {
    const text = 'A thing was successful!';
    const messageType = 'notification';
    const expectedAction = {
      type: types.ADD_FLASH_MESSAGE,
      messageType,
      text
    };

    expect(actions.addFlashMessage(text, messageType)).toEqual(expectedAction);
  })
});
