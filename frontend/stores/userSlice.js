import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: "",
  userLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    initLogin: (state, action) => {
      const loginData = action.payload;
      if (state.userLoggedIn == false && loginData) {
        state.userLoggedIn = true;
        state.userData = loginData.userData;
      }
    },
  },
});
export const { initLogin } = userSlice.actions;
export default userSlice.reducer;
