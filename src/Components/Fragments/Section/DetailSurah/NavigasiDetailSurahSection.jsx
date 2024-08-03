import { useParams } from "react-router-dom";
import useScroll from "../../../../Hooks/useScroll";
import useDetailSurahService from "../../../../Hooks/DetailSurah/useDetailSurahService";
import useDetailSurahRedux from "../../../../Hooks/DetailSurah/useDetailSurahRedux";
import ButtonNavigasi from "../../../Element/Section/detailSurah/ButtonNavigasi";

const NavigasiDetailSurahSection = () => {
  const { id } = useParams();
  const scroll = useScroll();
  const { data, error, isLoading } = useDetailSurahService(id);
  const { navigasi } = useDetailSurahRedux();


  if (isLoading) return <p>Loading....</p>;
  console.log(data);
  console.log(navigasi);
  
  return (
    <section
      className={`w-full bg-bgSecondary py-2 shadow-sm ${
        scroll ? "fixed-top-[60px]" : "absolute top-[60px]"
      }`}
    >
      <div className="container max-w-6xl ">
        <div className="flex items-center justify-between">
          <div>
            <ButtonNavigasi titleButton={data.nama_latin}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigasiDetailSurahSection;
