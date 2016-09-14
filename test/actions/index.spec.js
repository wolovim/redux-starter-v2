import * as actions from '../../src/actions/';
import * as types from '../../src/actions/ActionTypes';


describe('actions', () => {
  it('should create an action to add an item', () => {
    const item = 'example two';
    const expectedAction = {
      type: types.ADD_ITEM,
      item
    };
    expect(actions.addItem(item)).toEqual(expectedAction);
  });
});
