export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_COORDINATES":
      return {
        northEast: action.northEast,
        southWest: action.southWest
      };
    default:
      return state;
  }
};
