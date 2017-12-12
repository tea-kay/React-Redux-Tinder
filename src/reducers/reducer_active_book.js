// State argument is no application state, just current state
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
