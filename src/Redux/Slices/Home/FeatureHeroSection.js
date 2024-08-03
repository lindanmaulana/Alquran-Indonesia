import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tujuanMembaca: false,
  rencanaPembelajaran: false,
};

const FeatureHeroSection = createSlice({
  name: "Feature Hero Section",
  initialState,
  reducers: {
    handleTujuanMembaca: (state, action) => {
      state.tujuanMembaca = action.payload;
    },

    handleRencanaPembelajaran: (state, action) => {
      state.rencanaPembelajaran = action.payload;
    },
  },
});

export const { handleRencanaPembelajaran, handleTujuanMembaca } =
  FeatureHeroSection.actions;

export default FeatureHeroSection.reducer;
