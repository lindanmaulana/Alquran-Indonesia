import { useSelector } from "react-redux";

const useSideBar = () => {
  const selector = useSelector((state) => state.home.navigasi);
  return {
    menuSideBar: selector.menuSideBar,
    settingSideBar: selector.settingSideBar,
    searchSideBar: selector.searchSideBar,
  };
};

export default useSideBar;
