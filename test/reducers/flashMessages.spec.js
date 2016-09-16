import reducer from '../../src/reducers';
import * as types from '../../src/actions/ActionTypes';

describe('flashMessages reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const nextState = reducer(initialState, action);

    expect(nextState.flashMessages).toEqual({ list: [] });
  });

  it('should handle ADD_FLASH_MESSAGE', () => {
    const initialState = undefined;
    const action = {
      type: types.ADD_FLASH_MESSAGE,
      text: 'Boom!',
      messageType: 'error'
    };
    const nextState = reducer(initialState, action);

    expect(nextState.flashMessages.list[0].text).toEqual('Boom!');
    expect(nextState.flashMessages.list[0].messageType).toEqual('error');
    expect(nextState.flashMessages.list[0].timestamp.toString()).toMatch(/^\d+$/);
  });
});
