export const activeLogin = () => {
  return {
    type: "ACTIVE_LOGIN",
  };
};

export const disableLogin = () => {
  return {
    type: "DISABLE_LOGIN",
  };
};

export const OpenMenu = () => {
  return {
    type: "OpenHam",
  };
};

export const CloseMenu = () => {
  return {
    type: "CloseHam",
  };
};

export const AddItem = (para) => {
  return {
    type: "ADD",
    payload: para,
  };
};

export const DelItem = (para) => {
  return {
    type: "REMOVE",
    payload: para,
  };
};

export const GetItem = () => {
  return {
    type: "GET",
  };
};

export const AddBooking = (para) => {
  return {
    type: "ADD_DATA",
    payload: para,
  };
};

export const RemoveBooking = (para) => {
  return {
    type: "REMOVE_DATA",
    payload: para,
  };
};

export const SaveCar = (para) => {
  return {
    type: "SAVE_CAR",
    payload: para,
  };
};
