export const addCoordinates = (northEast, southWest) => ({
  type: "ADD_COORDINATES",
  northEast,
  southWest
});
export const chooseCoordinates = (lat, lng) => ({
  type: "CHOOSE_COORDINATES",
  lat,
  lng
});
