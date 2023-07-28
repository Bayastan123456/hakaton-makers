import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  error: "",
};

export const authSlice = createSlice({
  name: "@auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});
export const authReducer = authSlice.reducer;
export const { setError, setUser } = authSlice.actions;
