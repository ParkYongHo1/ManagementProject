import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user", // useSelector(state => state.슬라이스키.슬라이스키의 속성); 여기서 슬라이스키가 name:"슬라이스키" initalState가 슬라이스 속성(isLoggedIn)
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    signup: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
