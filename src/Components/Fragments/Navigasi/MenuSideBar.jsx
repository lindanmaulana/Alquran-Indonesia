import { useDispatch } from "react-redux";
import Navbar from "../../Element/Navigasi/Menu/Index";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { handleMenuSideBar } from "../../../Redux/Slices/Home/FeatureNavigasi";
import useSideBar from "../../../Hooks/Home/useSideBar";

const MenuSideBar = () => {
  const dispatch = useDispatch();
  const { menuSideBar } = useSideBar();

  const sideBar = () => {
    dispatch(handleMenuSideBar(false));
  };

  return (
    <nav
      className={`fixed top-0 left-0 bg-bgSecondary transition-global duration-1000 shadow-leftBar  ${
        menuSideBar ? "w-80 opacity-100" : "w-[1px] opacity-0"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <Link className="text-lg font-semibold cursor-pointer text-primary">
          ALquran Indonesia
        </Link>
        <Link
          onClick={sideBar}
          className="p-2 text-xl rounded-full text-primary hover:bg-primary hover:bg-opacity-20"
        >
          <IoClose />
        </Link>
      </div>
      <div className="w-full h-screen px-4 py-2 overflow-y-scroll">
        <h3 className="py-4 text-xs font-bold uppercase text-primary">Menu</h3>
        <div className="flex flex-col gap-2">
          <Navbar />
        </div>
      </div>
    </nav>
  );
};

export default MenuSideBar;
