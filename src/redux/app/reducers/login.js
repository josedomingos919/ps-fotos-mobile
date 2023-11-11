export const saveLoginData = (state, action) => {
  state.login.password = action.payload.password;
  state.login.username = action.payload.username;
};
