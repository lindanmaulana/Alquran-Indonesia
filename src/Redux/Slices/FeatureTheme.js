import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otomatis: true,
  terang: false,
  sepia: false,
  gelap: false,
};

const FeatureTheme = createSlice({
  name: "Feature Theme",
  initialState,
  reducers: {
    handleOtomatis: (state, action) => {
      state.otomatis = action.payload;
      state.terang = false;
      state.gelap = false;
      state.sepia = false;
    },

    handleTerang: (state, action) => {
      state.terang = action.payload;
      state.otomatis = false;
      state.gelap = false;
      state.sepia = false;
    },

    handleSepia: (state, action) => {
      state.sepia = action.payload;
      state.otomatis = false;
      state.terang = false;
      state.gelap = false;
    },

    handleGelap: (state, action) => {
      state.gelap = action.payload;
      state.otomatis = false;
      state.terang = false;
      state.sepia = false;
    },
  },
});

export const { handleOtomatis, handleTerang, handleSepia, handleGelap } =
  FeatureTheme.actions;
export default FeatureTheme.reducer;
