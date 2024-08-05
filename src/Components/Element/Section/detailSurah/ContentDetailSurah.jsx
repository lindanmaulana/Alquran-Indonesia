import ButtonSwitchFitur from "../../Button/DetailSurah/ButtonMainContent";
import {
  handleMembaca,
  handleTerjemahan,
} from "../../../../Redux/Slices/DetailSurah/FeatureMainContent";
import useDetailSurahMainContent from "../../../../Hooks/DetailSurah/useDetailSurahMainContent";
// import MainMembacaContent from "../../Content/DetailSurah/MainMembacaContent";
import MainTerjemahanContent from "../../Content/DetailSurah/MainTerjemahanContent";
import MainMembacaContent from "../../Content/DetailSurah/MainMembacaContent";
const ContentDetailSurah = () => {
  const { terjemahan, membaca } = useDetailSurahMainContent();

  return (
    <div className="flex-1 pt-24 overflow-y-auto bg-bgPrimary">
      <div className="flex flex-col items-center justify-center w-full py-5 ">
        <div className="flex items-center justify-center rounded-full bg-bgPrimary brightness-110">
          <ButtonSwitchFitur
            terjemahan={terjemahan}
            reducer={handleTerjemahan(true)}
          >
            Tejemahan
          </ButtonSwitchFitur>
          <ButtonSwitchFitur membaca={membaca} reducer={handleMembaca(true)}>
            Membaca
          </ButtonSwitchFitur>
        </div>
        <div className="py-6 overflow-y-auto">
          {terjemahan ? (
                <MainTerjemahanContent />
          ) : membaca ? (
            <MainMembacaContent />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ContentDetailSurah;
