import { NavLink } from "react-router-dom";
import SectionLayouts from "../../../Layouts/SectionLayouts";
import usePenandaSection from "../../../../Hooks/Home/usePenandaSection";
import ButtonPenanda from "../../../Element/Button/Home/ButtonPenanda";
import { handleRouteBaruDibaca, handleRoutePenanda } from "../../../../Redux/Slices/Home/FeatureBaruDibaca";
import BaruDibacaEl from "../../RouteElement/Home/Penanda/BaruDibacaEl";
import PenandaEl from "../../RouteElement/Home/Penanda/PenandaEl";
import useDataSurah from "../../../../Hooks/useDataSurah";

const PenandaSection = () => {
  const {baruDibaca, penanda} = usePenandaSection()
  const {selector} = useDataSurah()
  console.log({data: selector})
  
  return (
    <SectionLayouts>
      <div>
        <div className="flex gap-3 border-b-2 border-white/20 ">
        <ButtonPenanda baruDibaca={baruDibaca} reducer={handleRouteBaruDibaca(true)}>baru Baru ini dibaca</ButtonPenanda>
        <ButtonPenanda penanda={penanda} reducer={handleRoutePenanda(true)}>Penanda</ButtonPenanda>
        </div>
        <div className="py-2">
          {baruDibaca ? <BaruDibacaEl /> : penanda ? <PenandaEl /> : null}
        </div>
      </div>
    </SectionLayouts>
  );
};

export default PenandaSection;
