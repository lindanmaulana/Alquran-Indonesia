import { Link, NavLink } from "react-router-dom";
import SectionLayouts from "../../../Layouts/SectionLayouts";
import RouteMenuSection from "../../../../Router/Home/RouteMenuSection";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { handleReverse } from "../../../../Redux/Slices/Home/DataSurah.services";

const MenuSection = () => {
  const selector = useSelector((state) => state.home.data.reverse);
  const dispatch = useDispatch();
  const element = RouteMenuSection();

  return (
    <SectionLayouts>
      <div className="flex gap-3 mb-2 border-b border-white/20">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-primary text-primary text-sm p-2"
              : "text-primary text-sm p-2"
          }
        >
          Surah
        </NavLink>
        <NavLink
          to="juz"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-primary text-primary text-sm p-2"
              : "text-primary text-sm p-2"
          }
        >
          Juz
        </NavLink>
        <NavLink
          to="urutan-wahyu"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-primary text-primary text-sm p-2"
              : "text-primary text-sm p-2"
          }
        >
          Urutan Wahyu
        </NavLink>
      </div>
      {selector ? (
        <Link
          onClick={() => dispatch(handleReverse(false))}
          className="flex items-center justify-end gap-2 py-2 pb-4 text-xs text-primary"
        >
          <span>Sortir Dengan: Menurun</span>
          <MdKeyboardArrowDown className="text-lg" />
        </Link>
      ) : (
        <Link
          onClick={() => dispatch(handleReverse(true))}
          className="flex items-center justify-end gap-2 py-2 pb-4 text-xs text-primary"
        >
          <span>Sortir Dengan: Menaik</span>
          <MdKeyboardArrowUp className="text-lg" />
        </Link>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {element}
      </div>
    </SectionLayouts>
  );
};

export default MenuSection;
