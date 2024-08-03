import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuSideBar: false,
  settingSideBar: false,
  searchSideBar: false,
};
const FeatureNavigasi = createSlice({
  name: "Feature Navigasi",
  initialState,
  reducers: {
    handleMenuSideBar: (state, action) => {
      state.menuSideBar = action.payload;
      state.searchSideBar = false
      state.settingSideBar = false
    },
    handleSettingSideBar: (state, action) => {
      state.settingSideBar = action.payload;
      state.menuSideBar = false
    },
    handleSearchSideBar: (state, action) => {
      state.searchSideBar = action.payload;
      state.menuSideBar = false
    },
  },
});

export const { handleMenuSideBar, handleSearchSideBar, handleSettingSideBar } =
  FeatureNavigasi.actions;
export default FeatureNavigasi.reducer;
