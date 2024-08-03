import { useDispatch } from "react-redux";
import {
  handleGelap,
  handleOtomatis,
  handleSepia,
  handleTerang,
} from "../../../../../Redux/Slices/FeatureTheme";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { IoIosSunny } from "react-icons/io";
import { TbSunHigh, TbSunset2, TbMoon } from "react-icons/tb";
import useTheme from "../../../../../Hooks/Home/useTheme";

const ThemeView = () => {
  const dispatch = useDispatch();
  const { otomatis, terang, sepia, gelap } = useTheme();
  const dataTheme = [
    {
      id: 1,
      title: "Otomatis",
      icon: IoIosSunny,
      condition: otomatis,
      true: "",
      false: "",
      handleBar: () => {
        dispatch(handleOtomatis(true));
      },
    },
    {
      id: 2,
      title: "Terang",
      icon: TbSunHigh,
      condition: terang,
      true: "",
      false: "",
      handleBar: () => {
        dispatch(handleTerang(true));
      },
    },
    {
      id: 3,
      title: "Sepia",
      icon: TbSunset2,
      condition: sepia,
      true: "",
      false: "",
      handleBar: () => {
        dispatch(handleSepia(true));
      },
    },
    {
      id: 4,
      title: "Gelap",
      icon: TbMoon,
      condition: gelap,
      true: "",
      false: "",
      handleBar: () => {
        dispatch(handleGelap(true));
      },
    },
  ];
  return (
    <Fragment>
      {dataTheme?.map((res) => (
        <Link
          key={res.id}
          onClick={res.handleBar}
          className={`${
            res.condition ? "text-primary bg-bgSecondary" : "text-primary"
          } rounded-full px-3 py-2 text-[10px] flex items-center gap-1 transition-global`}
        >
          <res.icon
            className={`${
              res.condition ? "opacity-100 scale-150" : "opacity-0"
            } transition-global`}
          />{" "}
          <span>{res.title}</span>
        </Link>
      ))}
    </Fragment>
  );
};

export default ThemeView;
