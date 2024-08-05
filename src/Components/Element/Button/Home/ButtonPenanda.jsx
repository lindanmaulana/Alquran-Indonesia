import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ButtonPenanda = ({ children, reducer, baruDibaca, penanda }) => {
  const dispatch = useDispatch();
  const handleDispatch = (reducer) => {
    dispatch(reducer);
  };
  return (
    <Link
      onClick={() => handleDispatch(reducer)}
      className={`px-8 py-3 transition-global text-sm text-primary ${
        baruDibaca || penanda
          ? "border-b-2 border-opacity-100 border-white"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default ButtonPenanda;
