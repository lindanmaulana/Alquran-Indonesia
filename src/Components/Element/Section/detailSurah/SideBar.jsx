import { Link, NavLink } from "react-router-dom";
import useDetailSurahRedux from "../../../../Hooks/DetailSurah/useDetailSurahRedux";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { handleNavigasi } from "../../../../Redux/Slices/DetailSurah/FeatureNavigasiDetailSurah";
import useDataSurah from "../../../../Hooks/useDataSurah";
import useDetailSurahService from "../../../../Hooks/DetailSurah/useDetailSurahService";

const SideBar = () => {
  // costume hooks
  const { navigasi } = useDetailSurahRedux();
  const { data, error, isLoading } = useDetailSurahService();
  const { selector } = useDataSurah();

  //   redux
  const dispatch = useDispatch();



  return (
    <div
      className={`flex flex-col overflow-y-hidden transition-global gap-3 duration-1000 bg-bgSecondary ${
        navigasi.condition ? "w-[32%] px-2" : "w-0 px-0"
      }`}
    >
      <div className="flex items-start justify-start w-full gap-3 px-4 mt-28">
        <div className="flex gap-2 p-1 text-sm rounded-full bg-bgPrimary text-primary">
          <NavLink
            to={`surah`}
            className={({ isActive }) =>
              isActive
                ? "bg-bgSecondary rounded-full py-2 px-4 transition-global"
                : "bg-transparent rounded-full p-2 px-4 transition-global"
            }
          >
            Surah
          </NavLink>
          <NavLink
            to={`juz`}
            className={({ isActive }) =>
              isActive
                ? "bg-bgSecondary rounded-full px-4 py-2 transition-global"
                : "bg-transparent rounded-full px-4 py-2 transition-global"
            }
          >
            juz
          </NavLink>
          <NavLink
            to={`halaman`}
            className={({ isActive }) =>
              isActive
                ? "bg-bgSecondary rounded-full px-4 py-2 transition-global"
                : "bg-transparent rounded-full px-4 py-2 transition-global"
            }
          >
            Halaman
          </NavLink>
        </div>
        <Link
          onClick={() => dispatch(handleNavigasi(false))}
          className="self-center text-xl text-primary"
        >
          <IoClose />
        </Link>
      </div>
      <div className="flex w-full gap-2">
        <div className="flex flex-col w-3/5 h-screen gap-2">
          <input
            type="text"
            placeholder="Cari Surat"
            className="p-2 text-sm rounded-md outline-none text-primary bg-bgPrimary"
          />
          <div className="flex flex-col h-full gap-1 px-4 overflow-y-scroll">
            {selector?.map((res) => (
              <Link
                key={res.nomor}
                className="flex items-center gap-3 p-2 text-xs rounded-md text-primary hover:bg-bgPrimary"
              >
                <span className="">{res.nomor}</span>
                <span className="">{res.nama_latin}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-2/5 h-screen gap-2">
          <input
            type="text"
            placeholder="Ayat"
            className="p-2 text-sm rounded-md outline-none bg-bgPrimary text-primary"
          />
          <div className="flex flex-col h-full gap-1 px-4 overflow-y-scroll">
            {data?.ayat.map((res) => (
              <Link
                key={res.nomor}
                className="flex items-center gap-3 p-2 text-sm rounded-md text-primary hover:bg-bgPrimary"
              >
                <span className="">{res.nomor}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
