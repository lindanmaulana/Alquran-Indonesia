import { NavLink } from "react-router-dom";
import SectionLayouts from "../../../Layouts/SectionLayouts";
import RouteHeroSection from "../../../../Router/Home/RouteHeroSection";

const PenandaSection = () => {
  const element = RouteHeroSection();
  return (
    <SectionLayouts>
      <div>
        <div className="flex gap-3 border-b border-white/20 ">
          <NavLink
            to="new-read"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary text-primary text-sm p-2"
                : "text-primary text-sm p-2"
            }
          >
            Baru-baru ini dibaca
          </NavLink>
          <NavLink
            to="marker"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary text-primary text-sm p-2"
                : " text-primary text-sm p-2"
            }
          >
            Penanda
          </NavLink>
        </div>
        <div className="py-2">{element}</div>
      </div>
    </SectionLayouts>
  );
};

export default PenandaSection;
