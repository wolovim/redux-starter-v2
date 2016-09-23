import { ITEM__CREATE } from '../actions/ActionTypes';


const initialState = {
  items: ['example item']
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case ITEM__CREATE:
      return { items: state.items.concat(action.item) };
    default:
      return state;
  }
}
