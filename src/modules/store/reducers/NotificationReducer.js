export default (state = {}, action) => {
  switch (action.type) {
    case "REFRESH_NOTIFICATION":
      return {
        refresh: action.ref
      };
    default:
      return state;
  }
};
