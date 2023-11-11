import { initialState } from "./state";
import { createSlice } from "@reduxjs/toolkit";
import { initLoginAsyncFunctions } from "./extra-reducers/auth";

import * as reducers from "./reducers";

export const appSlice = createSlice({
  name: "appSlice",
  reducers,
  initialState,
  extraReducers: (builder) => {
    initLoginAsyncFunctions(builder);
  },
});
