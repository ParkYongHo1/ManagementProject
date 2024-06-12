import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // 초기 state 값
  name: "박용호",
};

const personSlice = createSlice({
  // 슬라이스를 생성합니다
  name: "person",
  initialState, // 초기 state 설정
  // reducers: {},  리듀서를 정의합니다 (생략 가능)
});

export default configureStore({
  // Redux 스토어를 설정합니다
  reducer: {
    person: personSlice.reducer, // 슬라이스의 리듀서를 등록합니다
  },
});
