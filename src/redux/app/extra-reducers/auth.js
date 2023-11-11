import { createAsyncThunk } from "@reduxjs/toolkit";
import { service } from "../../../services";

const handleLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await service.auth.login({ username, password });
    return response.data;
  }
);

export const initLoginAsyncFunctions = (builder) => {
  builder.addCase(handleLogin.pending, (state, action) => {});
  builder.addCase(handleLogin.rejected, (state, action) => {});
  builder.addCase(handleLogin.fulfilled, (state, action) => {
    //state.entities.push(action.payload);
  });
};
