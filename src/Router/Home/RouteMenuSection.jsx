import { useRoutes } from "react-router-dom";
import SurahEl from "../../Components/Fragments/RouteElement/Home/Menu/SurahEl";
import JuzEl from "../../Components/Fragments/RouteElement/Home/Menu/JuzEl";
import UrutanWahyuEl from "../../Components/Fragments/RouteElement/Home/Menu/UrutanWahyuEl";

const RouteMenuSection = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <SurahEl />,
    },
    {
      path: "juz",
      element: <JuzEl />,
    },
    {
      path: "urutan-wahyu",
      element: <UrutanWahyuEl />,
    },
  ]);
  return router;
};

export default RouteMenuSection;
