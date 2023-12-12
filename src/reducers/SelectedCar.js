export const Saved = (state = [], action) => {
  switch (action.type) {
    case "SAVE_CAR":
      return [action.payload];
    default:
      return state;
  }
};
