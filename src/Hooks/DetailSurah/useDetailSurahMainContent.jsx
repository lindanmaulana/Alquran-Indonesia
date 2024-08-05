import { useSelector } from "react-redux";

const useDetailSurahMainContent = () => {
  const selector = useSelector((state) => state.detailSurah.mainContent);
  return selector;
};

export default useDetailSurahMainContent;
