import { useSelector } from "react-redux";

const useTheme = () => {
  const selector = useSelector((state) => state.home.theme);

  const handleThemeSideBar = () => {
    return selector.otomatis || selector.gelap
      ? "bg-bgSecondary"
      : selector.terang
      ? "bg-primary"
      : selector.sepia
      ? "bg-bgSepia"
      : "";
  };

  const handleThemeBg = () => {
    return selector.otomatis || selector.gelap
      ? "bg-bgPrimary"
      : selector.terang
      ? "bg-primary"
      : selector.sepia
      ? "bg-bgSepia"
      : "";
  };

  const handleThemeText = () => {
    return selector.otomatis || selector.gelap
      ? "text-primary"
      : selector.terang || selector.sepia
      ? "text-bgPrimary"
      : "";
  };

  return {
    otomatis: selector.otomatis,
    terang: selector.terang,
    sepia: selector.sepia,
    gelap: selector.gelap,
    handleThemeSideBar,
    handleThemeBg,
    handleThemeText,
  };
};

export default useTheme;
