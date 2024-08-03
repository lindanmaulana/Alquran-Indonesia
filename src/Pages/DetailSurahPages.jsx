import { Fragment } from "react";
import Header from "../Components/Fragments/Section/Header";
import NavigasiDetailSurahSection from "../Components/Fragments/Section/DetailSurah/NavigasiDetailSurahSection";
import MainDetailSurah from "../Components/Fragments/Section/DetailSurah/MainDetailSurah";
const DetailSurahPages = () => {

  return (
    <Fragment>
      <Header />
      <NavigasiDetailSurahSection />
      <MainDetailSurah />
    </Fragment>
  );
};

export default DetailSurahPages;
