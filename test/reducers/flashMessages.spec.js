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

  it('should handle DELETE_FLASH_MESSAGE', () => {
    const initialState = {
      flashMessages: {
        list: [
          {
            text: 'Boom!',
            messageType: 'error',
            timestamp: 1234
          },
          {
            text: 'Boom #2!',
            messageType: 'error',
            timestamp: 4567
          }
        ]
      }
    };
    const action = {
      type: types.DELETE_FLASH_MESSAGE,
      timestamp: 1234
    };
    const nextState = reducer(initialState, action);

    expect(nextState.flashMessages).toEqual(
      {
        list: [
          {
            text: 'Boom #2!',
            messageType: 'error',
            timestamp: 4567
          }
        ]
      }
    );
  });
});
