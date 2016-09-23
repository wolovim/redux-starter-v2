import reducer from '../../src/reducers';
import * as types from '../../src/actions/ActionTypes';

describe('list reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const nextState = reducer(initialState, action);

    expect(nextState.list).toEqual(
      {
        items: ['example item']
      }
    );
  });

  it('should handle ITEM__CREATE', () => {
    const initialState = {
      list: {
        items: [
          'example item',
          'example two'
        ]
      }
    };
    const action = {
      type: types.ITEM__CREATE,
      item: 'example three'
    };
    const nextState = reducer(initialState, action);

    expect(nextState.list).toEqual(
      {
        items: [
          'example item',
          'example two',
          'example three'
        ]
      }
    );
  });
});
