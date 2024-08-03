import { useSelector } from "react-redux";

const useHeroSection = () => {
  const selector = useSelector((state) => state.home.heroSection);

  return {
    tujuanMembaca: selector.tujuanMembaca,
    rencanaPembelajaran: selector.rencanaPembelajaran,
  };
};

export default useHeroSection;
