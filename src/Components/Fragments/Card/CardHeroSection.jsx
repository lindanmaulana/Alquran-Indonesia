import { FcWorkflow } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {
  handleRencanaPembelajaran,
  handleTujuanMembaca,
} from "../../../Redux/Slices/Home/FeatureHeroSection";
import { SlNotebook } from "react-icons/sl";
import CardHeroSectionView from "../../Element/Section/heroSection/CardHeroSectionView";
import useHeroSection from "../../../Hooks/Home/useHeroSection";
import { useEffect, useState } from "react";

const CardHeroSection = () => {
  const [isViewTujuan, setIsViewTujuan] = useState(false);
  const [isViewRencana, setIsViewRencana] = useState(false);

  const { rencanaPembelajaran, tujuanMembaca } = useHeroSection();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleTujuanMembaca(isViewTujuan));
    dispatch(handleRencanaPembelajaran(isViewRencana));
  }, [dispatch, isViewRencana, isViewTujuan]);

  const dataHero = [
    {
      id: 1,
      title: "Tujuan Membaca Quran Khusus",
      titleButton: "Buat Tujuan",
      description:
        "Apakah Anda ingin membaca 10 menit sehari, menyelesaikan satu Juz dalam sebulan, atau menyelesaikan seluruh Al-Quran dalam setahun? Sangat mudah untuk membuat sasaran khusus dan melacak kemajuan Anda",
      icon: <FcWorkflow className="text-3xl" />,
      handleView: () => {
        setIsViewTujuan(!isViewTujuan);
      },
      condition: tujuanMembaca,
    },
    {
      id: 2,
      title: "Rencana Pembelajaran",
      titleButton: "Lihat Semua Paket",
      description:
        "Pernah memulai program pembelajaran dan keluar jalur di tengah jalan? Rencana pembelajaran dibagi menjadi beberapa bagian yang dapat dikelola dan kami melacak kemajuan Anda hingga Anda mencapai garis finis. Jelajahi penawaran kursus kami saat ini",
      icon: <SlNotebook className="text-3xl text-primary" />,
      handleView: () => {
        setIsViewRencana(!isViewRencana);
      },
      condition: rencanaPembelajaran,
    },
  ];
  return (
    <>
      {dataHero?.map((res) => (
        <CardHeroSectionView
          key={res.id}
          id={res.id}
          title={res.title}
          titleButton={res.titleButton}
          icon={res.icon}
          handleView={res.handleView}
          condition={res.condition}
          description={res.description}
        />
      ))}
    </>
  );
};

export default CardHeroSection;
