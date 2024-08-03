import {
  IoGlobeOutline,
  IoPersonOutline,
  IoSearch,
  IoSettingsSharp,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  handleSearchSideBar,
  handleSettingSideBar,
} from "../../../../Redux/Slices/Home/FeatureNavigasi";

const ActionMenu = () => {
  const dispatch = useDispatch();

  const dataActionMenu = [
    {
      id: 1,
      icon: <IoPersonOutline />,
      handleBar: () => {
        dispatch();
      },
    },
    {
      id: 2,
      icon: <IoGlobeOutline />,
      handleBar: () => {
        dispatch();
      },
    },
    {
      id: 3,
      icon: <IoSettingsSharp />,
      handleBar: () => {
        dispatch(handleSettingSideBar(true));
      },
    },
    {
      id: 4,
      icon: <IoSearch />,
      handleBar: () => {
        dispatch(handleSearchSideBar(true));
      },
    },
  ];

  return (
    <>
      {dataActionMenu?.map((res) => (
        <Link
          key={res.id}
          onClick={res.handleBar}
          className="p-2 text-xl rounded-full text-primary hover:bg-primary hover:bg-opacity-10"
        >
          {res.icon}
        </Link>
      ))}
    </>
  );
};

export default ActionMenu;
