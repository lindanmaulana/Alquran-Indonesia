import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleBaruDibaca } from "../../../../../Redux/Slices/Home/FeatureBaruDibaca";
import { useEffect, useState } from "react";
const SurahEl = () => {
  const [data, setData] = useState([]);
  // get redux
  const selector = useSelector((state) => state.home.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selector.reverse) {
      const reverseData = [...selector.data].reverse();
      setData(reverseData);
    } else {
      setData(selector.data);
    }
  }, [selector]);

  // dispatcg redux
  const handleClick = (res) => {
    dispatch(handleBaruDibaca({name: res.nama_latin, id: res.nomor}));
  };

  return (
    <>
      {data?.map((res) => (
        <Link
          to={`/surah/${res.nomor}`}
          onClick={() => handleClick(res)}
          key={res.nomor}
          className="flex items-center px-6 py-4 border rounded-md group gap-7 hover:border-secondary border-bgSecondary"
        >
          <div className="w-[11%] text-center relative h-full">
            <span className="absolute block w-10 h-10 rotate-45 translate-x-1/2 -translate-y-1/2 rounded-md group-hover:bg-secondary right-1/2 top-1/2 bg-bgSecondary"></span>
            <h2 className="absolute text-sm font-semibold translate-x-1/2 -translate-y-1/2 right-1/2 top-1/2 text-primary group-hover:text-bgPrimary">
              {res.nomor}
            </h2>
          </div>
          <div className="flex items-center justify-between w-[89%] h-full">
            <div>
              <h2 className="text-sm font-semibold text-primary">
                {res.nama_latin}
              </h2>
              <p className="text-xs text-white/40 group-hover:text-secondary">
                {res.arti}
              </p>
            </div>
            <div className="text-end">
              <h2 className="text-base text-primary">{res.nama}</h2>
              <p className="text-[10px] group-hover:text-secondary text-white/40">
                {res.jumlah_ayat} ayat
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SurahEl;
