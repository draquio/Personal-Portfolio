import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  type: "ES"
};

export const languageSlice = createSlice({
  name: "LEN",
  initialState,
  reducers: {
    changelanguage: (state, action) => {
      state.type = action.payload;
      // console.log("state: "+state.type);
      // console.log(action.payload);
    },
  },
});

export const { changelanguage } = languageSlice.actions;
export default languageSlice.reducer;