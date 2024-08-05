
import Header from "../Components/Fragments/Section/Header";
import HeroSection from "../Components/Fragments/Section/Home/HeroSection";
import MenuSection from "../Components/Fragments/Section/Home/MenuSection";
import PenandaSection from "../Components/Fragments/Section/Home/PenandaSection";
import usePenandaSection from "../Hooks/Home/usePenandaSection";
const HomePages = () => {
  const selector = usePenandaSection()
  console.log(selector)
  return (

    <>
      <Header />
      <HeroSection />
      <PenandaSection />
      <MenuSection />
    </>
  );
};

export default HomePages;
