import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleMenuSideBar } from "../../../../Redux/Slices/Home/FeatureNavigasi";
import useSideBar from "../../../../Hooks/Home/useSideBar";

const HamburgerMenu = () => {
  // redux dispatch
  const dispatch = useDispatch();
  const { menuSideBar } = useSideBar();

  const sideBar = () => {
    dispatch(handleMenuSideBar(true));
  };

  return (
    <Link
      onClick={sideBar}
      className={`text-primary ${menuSideBar ? "" : "z-10"}`}
    >
      <RxHamburgerMenu className="text-2xl" />
    </Link>
  );
};

export default HamburgerMenu;
