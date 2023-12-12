export const Bookings = (state = [], action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [action.payload];
    case "REMOVE_DATA":
      return state.filter((p) => p.id !== action.payload);
    default:
      return state;
  }
};
