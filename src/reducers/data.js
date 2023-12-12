import { isEqual } from "lodash";

export const Data = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      const isExistingData = state.some((item) =>
        isEqual(item, action.payload)
      );

      if (!isExistingData) {
        return [...state, action.payload];
      }
      return state;
    case "REMOVE":
      return state.filter((item) => !isEqual(item, action.payload));
    default:
      return state;
  }
};
