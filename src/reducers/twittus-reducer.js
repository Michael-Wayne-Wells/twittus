export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TWIT':
      const { author, body, id } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          author: author,
          body: body,
          id: id
        }
      });
      return newState
    default:
      return state;
  }
};
