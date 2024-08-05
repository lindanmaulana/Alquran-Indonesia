import { Link } from "react-router-dom";
import useDetailSurahService from "../../../../Hooks/DetailSurah/useDetailSurahService";
import { IoIosInformationCircle, IoIosPlay, IoIosPause } from "react-icons/io";
import { useRef, useState } from "react";
import SkeletonSurah from "../../../Skeleton/DetailSurah/SkeletonSurah";

const MainMembacaContent = () => {
  const { data, isLoading } = useDetailSurahService();

  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = (audioRef) => {
    setIsPlay(!isPlay);

    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const toArabicNumbers = (number) => {
    const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map(
        (digit) => arabicDigits[digit] || digit // Jika bukan digit, biarkan apa adanya
      )
      .join("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl text-primary">{data.nama}</h2>

      <div className="flex items-center gap-10 py-5">
        <Link className="flex items-center gap-1 text-sm text-primary">
          <IoIosInformationCircle className="text-xl" /> <span>Info Surah</span>
        </Link>
        <Link
          onClick={() => handlePlay(audioRef)}
          className="flex items-center gap-1 text-sm text-secondary"
        >
          {isPlay ? (
            <IoIosPause className="text-xl" />
          ) : (
            <IoIosPlay className="text-xl" />
          )}
          <span>Putar Audio</span>
        </Link>
        <audio controls ref={audioRef} className="hidden w-1 h-1">
          <source src={data?.audio} type="audio/mp3" />
        </audio>
      </div>

      {isLoading ? (
        <SkeletonSurah number={data?.jumlah_ayat} />
      ) : (
        <div className="w-2/4">
          {data?.ayat.map((res) => (
            <Link className="text-2xl text-primary" key={res.id}>
              {res.ar}{" "}
              <span className="ml-2 rounded-full text-secondary">
                {toArabicNumbers(res.nomor)}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainMembacaContent;
