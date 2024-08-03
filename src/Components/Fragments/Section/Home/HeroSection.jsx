import { Link, useLoaderData } from "react-router-dom";
import { RiPlayMiniFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import MenuInformation from "../../../Element/Section/heroSection/MenuInformation";
import SectionLayouts from "../../../Layouts/SectionLayouts";

import CardHeroSection from "../../Card/CardHeroSection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleData } from "../../../../Redux/Slices/Home/DataSurah.services";

const HeroSection = () => {
  const data = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleData(data));
  }, [data, dispatch]);
  return (
    <SectionLayouts>
      <div className="w-full h-screen py-5">
        <div className="flex items-center justify-end pt-8">
          <Link className="flex items-center justify-end gap-2 p-2 text-sm rounded-sm text-primary hover:bg-black/40">
            <RiPlayMiniFill className="text-xl" />
            <span>Putar Radio</span>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-4/6 p-3 rounded-full bg-primary">
            <IoSearch className="w-1/12 text-3xl text-black/40" />
            <input
              type="text"
              placeholder="Apa yang ingin anda baca?"
              className="flex-1 h-full bg-transparent outline-none"
            />
            <FaMicrophone className="w-1/12 text-xl text-secondary" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 py-3 mb-4 text-sm text-primary">
            {/* Information */}
            <MenuInformation />
          </div>
          <div className="flex w-full flex-col justify-start items-start px-3 py-4 bg-[#272F33] rounded-md">
            <h2 className="mb-2 text-3xl font-medium text-secondary">
              Perjalanan Pertumbuhan Quran
            </h2>
            <div className="flex flex-col w-full gap-2">
              {/* card perjalanan */}
              <CardHeroSection />
            </div>
          </div>
        </div>
      </div>
    </SectionLayouts>
  );
};

export default HeroSection;
