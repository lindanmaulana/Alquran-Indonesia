import { useDispatch } from "react-redux";
import SideBar from "../../Element/Navigasi/Action/SideBar";
import ThemeView from "../../Element/Navigasi/Action/Setting/ThemeView";
import { handleSettingSideBar } from "../../../Redux/Slices/Home/FeatureNavigasi";
import useSideBar from "../../../Hooks/Home/useSideBar";
import useTheme from "../../../Hooks/Home/useTheme";

const SettingSideBar = () => {
  const dispatch = useDispatch();
  const { settingSideBar } = useSideBar();
  const { handleThemeText } = useTheme();

  const sideBar = () => {
    dispatch(handleSettingSideBar(false));
  };

  return (
    <SideBar
      handleBar={sideBar}
      position="right-0 top-0"
      width="w-96"
      action={settingSideBar}
      title="Pengaturan"
      styleSideBar="z-10 shadow-rightBar"
    >
      <h2 className={`${handleThemeText()} font-semibold mb-4`}>Tema</h2>
      <div className="flex items-center justify-center gap-3 p-1 rounded-full bg-bgPrimary">
        <ThemeView />
      </div>
    </SideBar>
  );
};

export default SettingSideBar;
