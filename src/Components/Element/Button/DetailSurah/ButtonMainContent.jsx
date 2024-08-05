import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ButtonMainContent = (props) => {
  const { children, terjemahan, membaca, reducer } = props;
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(reducer)
  }

  return <Link onClick={handleDispatch} className={`px-8 py-3 transition-global rounded-full text-sm text-primary ${terjemahan || membaca ? "bg-bgSecondary" : ""}`}>{children}</Link>;
};

export default ButtonMainContent;
