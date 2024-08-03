import { configureStore } from "@reduxjs/toolkit";
import storeHome from "../combine/homeCombine";
import storeDetailSurah from "../combine/DetailSurahCombine";
import FeatureDataSurahLengkap from "../Slices/FeatureDataSurahLengkap";

const store = configureStore({
  reducer: {
    data: FeatureDataSurahLengkap,
    home: storeHome,
    detailSurah: storeDetailSurah
  },
});
export default store;
