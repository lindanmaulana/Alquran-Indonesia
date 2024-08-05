import { combineReducers } from "@reduxjs/toolkit";
import FeatureNavigasiDetailSurah from "../Slices/DetailSurah/FeatureNavigasiDetailSurah";
import FeatureMainContent from "../Slices/DetailSurah/FeatureMainContent";

const storeDetailSurah = combineReducers({
    navigasi: FeatureNavigasiDetailSurah,
    mainContent: FeatureMainContent
})

export default storeDetailSurah