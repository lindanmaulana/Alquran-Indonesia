import { combineReducers } from "@reduxjs/toolkit";
import FeatureNavigasi from "../Slices/Home/FeatureNavigasi";
import FeatureTheme from "../Slices/FeatureTheme";
import FeatureHeroSection from "../Slices/Home/FeatureHeroSection";
import DataSurah from "../Slices/Home/DataSurah.services";
import FeatureBaruDibaca from "../Slices/Home/FeatureBaruDibaca";

const storeHome = combineReducers({
  data: DataSurah,
  navigasi: FeatureNavigasi,
  theme: FeatureTheme,
  heroSection: FeatureHeroSection,
  penandaSection: FeatureBaruDibaca,
});

export default storeHome;
