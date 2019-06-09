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
export const goToCoords = (lat2, lng2) => ({
  type: "GO_TO_COORDINATES",
  lat2,
  lng2
});
