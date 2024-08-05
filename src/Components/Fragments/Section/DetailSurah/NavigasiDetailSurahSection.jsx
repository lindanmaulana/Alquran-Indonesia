import { useParams } from "react-router-dom";
import useScroll from "../../../../Hooks/useScroll";
import useDetailSurahService from "../../../../Hooks/DetailSurah/useDetailSurahService";
import ButtonNavigasi from "../../../Element/Button/DetailSurah/ButtonNavigasi";

const NavigasiDetailSurahSection = () => {
  const { id } = useParams();
  const scroll = useScroll();
  const { data,  isLoading } = useDetailSurahService(id);
  
  return (
    <section
      className={`w-full bg-bgSecondary py-2 shadow-sm z-10 ${
        scroll ? "fixed-top-[60px]" : "absolute top-[60px]"
      }`}
    >
      <div className="container max-w-6xl ">
        <div className="flex items-center justify-between">
          <div>
            <ButtonNavigasi isLogin={isLoading} titleButton={data?.nama_latin}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigasiDetailSurahSection;
