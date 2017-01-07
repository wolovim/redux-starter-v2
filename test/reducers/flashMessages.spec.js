import reducer from '../../src/reducers';
import * as types from '../../src/actions/ActionTypes';

describe('flashMessages reducer', () => {
  xit('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const nextState = reducer(initialState, action);

    expect(nextState.flashMessages).toEqual({ list: [] });
  });

  xit('should handle FLASH_MESSAGE__CREATE', () => {
    const initialState = undefined;
    const action = {
      type: types.FLASH_MESSAGE__CREATE,
      text: 'Boom!',
      messageType: 'error'
    };
    const nextState = reducer(initialState, action);

    expect(nextState.flashMessages.list[0].text).toEqual('Boom!');
    expect(nextState.flashMessages.list[0].messageType).toEqual('error');
    expect(nextState.flashMessages.list[0].timestamp.toString()).toMatch(/^\d+$/);
  });

  xit('should handle FLASH_MESSAGE__DELETE', () => {
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
      type: types.FLASH_MESSAGE__DELETE,
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
