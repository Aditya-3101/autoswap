export const Login = (state = false, action) => {
  switch (action.type) {
    case "ACTIVE_LOGIN":
      return true;
    case "DISABLE_LOGIN":
      return false;
    default:
      return state;
  }
};
