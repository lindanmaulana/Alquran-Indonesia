import { useSelector } from "react-redux";

const usePenandaSection = () => {
  const selector = useSelector((state) => state.home.penandaSection);

  return {
    new: selector.new,
    baruDibaca: selector.baruDibaca,
    penanda: selector.penanda,
  };
};

export default usePenandaSection;
