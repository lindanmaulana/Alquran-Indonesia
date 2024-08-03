import { combineReducers } from "@reduxjs/toolkit";
import FeatureNavigasiDetailSurah from "../Slices/DetailSurah/FeatureNavigasiDetailSurah";

const storeDetailSurah = combineReducers({
    navigasi: FeatureNavigasiDetailSurah
})

export default storeDetailSurah