export const HamReducer = (state = false, action) => {
  switch (action.type) {
    case "OpenHam":
      return (state = true);
    case "CloseHam":
      return (state = false);
    default:
      return state;
  }
};
