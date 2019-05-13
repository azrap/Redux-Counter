import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

console.log(initialState.count)

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  console.log(state.count)
  switch (action.type) {
    case INCREMENT:
    return {
      ...state,
      count: state.count+1
      
     
    };
    case DECREMENT:
    return {
      ...state,
      count: state.count-1
    
    };

    default:
      return state;
  }
};

