import * as actions from '../../src/actions/';
import * as types from '../../src/actions/ActionTypes';


describe('actions', () => {
  it('should create an action to add an item', () => {
    const item = 'example two';
    const expectedAction = {
      type: types.ITEM__CREATE,
      item
    };

    expect(actions.addItemSuccess(item)).toEqual(expectedAction);
  });

  it('should create an action to add a flash message', () => {
    const text = 'A thing was successful!';
    const messageType = 'notification';
    const expectedAction = {
      type: types.FLASH_MESSAGE__CREATE,
      messageType,
      text
    };

    expect(actions.addFlashMessage(text, messageType)).toEqual(expectedAction);
  });

  it('should create an action to delete a flash message', () => {
    const timestamp = 12345;
    const expectedAction = {
      type: types.FLASH_MESSAGE__DELETE,
      timestamp
    };

    expect(actions.deleteFlashMessage(timestamp)).toEqual(expectedAction);
  });
});
