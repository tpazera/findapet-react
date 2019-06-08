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
    case "GO_TO_COORDINATES":
      return {
        lat2: action.lat2,
        lng2: action.lng2
      };
    default:
      return state;
  }
};
