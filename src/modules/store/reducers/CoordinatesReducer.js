export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_COORDINATES":
      return {
        northEast: action.northEast,
        southWest: action.southWest
      };
    case "CHOOSE_COORDINATES":
      return {
        lat: action.lat,
        lng: action.lng
      };
    default:
      return state;
  }
};
