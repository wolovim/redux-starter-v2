import { ADD_ITEM } from '../actions/ActionTypes';


const initialState = {
  items: ['example item']
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { items: state.items.concat(action.item) };
    default:
      return state;
  }
}
