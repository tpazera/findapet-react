export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_FILTERS":
      return {
        petColor: action.petColor,
        petType: action.petType,
        petStatus: action.petStatus
      };
    default:
      return state;
  }
};
