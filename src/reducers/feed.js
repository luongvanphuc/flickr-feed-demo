export default (state = {}, action) => {
  switch (action.type) {
    case "GET_FEEDS":
      return {
        ...state,
        feeds: action.payload.items
      };

    default:
      return state;
  }
};
