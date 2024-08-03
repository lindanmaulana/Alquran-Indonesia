import { Link, NavLink } from "react-router-dom";
import useDetailSurahRedux from "../../../../Hooks/DetailSurah/useDetailSurahRedux";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { handleNavigasi } from "../../../../Redux/Slices/DetailSurah/FeatureNavigasiDetailSurah";
import useDataSurah from "../../../../Hooks/useDataSurah";

const SideBar = () => {
  const { navigasi } = useDetailSurahRedux();
  const { error, isLoading, selector } = useDataSurah();
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-col overflow-hidden transition-global gap-3 duration-1000 bg-bgSecondary ${
        navigasi.condition ? "w-4/12" : "w-0"
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
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Cari Surat"
            className="p-2 rounded-md bg-bgPrimary"
          />
          <div className="flex flex-col h-screen gap-1 px-4 overflow-y-scroll whitespace-nowrap">
            {selector?.map((res) => (
              <Link key={res.nomor} className="flex items-center gap-3 p-2 text-xs rounded-md text-primary hover:bg-bgPrimary"><span className="">{res.nomor}</span><span className="">{res.nama_latin}</span></Link>
            ))}
          </div>
        </div>
        <div className="">
            <input type="text" placeholder="Ayat" className="p-2 rounded-md bg-bgPrimary" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
