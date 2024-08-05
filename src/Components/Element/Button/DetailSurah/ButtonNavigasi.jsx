import { Link } from "react-router-dom";
import useDetailSurahRedux from "../../../../Hooks/DetailSurah/useDetailSurahRedux";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleNavigasi } from "../../../../Redux/Slices/DetailSurah/FeatureNavigasiDetailSurah";

const ButtonNavigasi = ({ titleButton, isLogin }) => {
  const [isClick, setIsClick] = useState(false);
  const { navigasi } = useDetailSurahRedux();
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsClick(!isClick)
  };

  useEffect(() => {
    dispatch(handleNavigasi(isClick));
  }, [dispatch, isClick]);

  if(isLogin) return <p>Loading....</p>
  
  return (
    <Link
      onClick={handleClick}
      className="flex items-center gap-1 text-sm font-semibold text-primary"
    >
      {titleButton}{" "}
      {navigasi.condition ? (
        <MdKeyboardArrowUp className="text-xl" />
      ) : (
        <MdKeyboardArrowDown className="text-xl" />
      )}
    </Link>
  );
};

export default ButtonNavigasi;
