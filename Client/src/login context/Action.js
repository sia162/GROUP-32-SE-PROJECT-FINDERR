export const loginStart = (usercreds) => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
  token: token,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

//ON SETTINGS CHANGE HANDLING
export const UpdateStart = () => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
  token: token,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
