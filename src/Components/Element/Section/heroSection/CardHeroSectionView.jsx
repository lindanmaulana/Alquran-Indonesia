import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import { Link } from "react-router-dom";

const CardHeroSectionView = (props) => {
    const {id, title, titleButton, handleView, condition, description, icon} = props
    
  return (
    <Link onClick={handleView} className="w-full p-3 border border-gray-500 rounded-md" key={id}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="flex items-center gap-2 mb-3">
            {" "}
            {icon}
            <span className="text-sm text-primary text-opacity-80">
              {title}
            </span>
          </h2>
          <Link className="px-3 py-1 text-sm border rounded-md bg-secondary border-secondary hover:bg-transparent hover:text-secondary text-primary">
            {titleButton}
          </Link>
        </div>
        {condition ? (
          <Link>
            <IoCaretUp className="text-xl text-primary" />
          </Link>
        ) : (
          <Link>
            <IoCaretDown className="text-xl text-primary" />
          </Link>
        )}
      </div>
      <div className={`${condition ? "block" : "hidden"} overflow-hidden`}>
        <p className="text-sm text-primary">{description}</p>
      </div>
    </Link>
  );
};

export default CardHeroSectionView;
