import HamburgerMenu from "../../Element/Navigasi/Menu/HamburgerMenu";
import ActionMenu from "../../Element/Navigasi/Action/ActionMenu";
import MenuSideBar from "../Navigasi/MenuSideBar";
import SettingSideBar from "../Navigasi/SettingSideBar";
import useScroll from "../../../Hooks/useScroll";
import useTheme from "../../../Hooks/Home/useTheme";
// import { useSelector } from "react-redux";
const Header = () => {
  // const selector = useSelector((state) => state.home);
  const { handleThemeSideBar } = useTheme();

const scroll = useScroll()
  // console.log(selector);
  return (
    <header
      className={`w-full py-3 transition-global ${scroll ? "fixed top-0" : "absolute top-0"} z-50 bg-bgSecondary px-6 lg:px-0 ${handleThemeSideBar()} transition-global`}
    >
      <div className="container max-w-6xl">
        <nav className="flex justify-between">
          <div className="flex items-center gap-3">
            <HamburgerMenu />
            <h1 className="text-xs font-semibold cursor-pointer text-primary sm:text-sm md:text-base lg:text-xl">
              Alquran Indonesia
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base lg:text-2xl text-primary">
            <ActionMenu />
          </div>
        </nav>
        <MenuSideBar />
        <SettingSideBar />
      </div>
    </header>
  );
};

export default Header;
