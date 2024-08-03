import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import useTheme from "../../../../Hooks/Home/useTheme";

const SideBar = (props) => {
  const {
    position,
    action,
    width = "w-80",
    title,
    children,
    handleBar,
    styleSideBar,
  } = props;
  const {
    handleThemeSideBar,
    handleThemeText,
    otomatis,
    sepia,
    terang,
    gelap,
  } = useTheme();

  return (
    <nav
      className={`fixed $${handleThemeSideBar()} ${position} ${styleSideBar} transition-global duration-1000 shadow-x; ${
        action ? `${width} opacity-100` : "w-[1px] opacity-0"
      }`}
    >
      <div
        className={` p-4 flex items-center justify-between ${handleThemeSideBar()} border-b $${
          sepia || terang
            ? "  border-slate-300"
            : otomatis || gelap
            ? " border-white/20"
            : ""
        }`}
      >
        <Link
          className={`text-lg font-medium cursor-pointer ${handleThemeText()} `}
        >
          {title}
        </Link>
        <Link
          onClick={handleBar}
          className="p-2 text-xl rounded-full text-primary hover:bg-primary hover:bg-opacity-20"
        >
          <IoClose />
        </Link>
      </div>
      <div
        className={`w-full overflow-y-scroll py-2 px-4 h-screen ${handleThemeSideBar()}`}
      >
        {children}
      </div>
    </nav>
  );
};

export default SideBar;
