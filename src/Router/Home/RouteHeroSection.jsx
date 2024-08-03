import { useRoutes } from "react-router-dom"
import BaruDibacaEl from "../../Components/Fragments/RouteElement/Home/Penanda/BaruDibacaEl"
import PenandaEl from "../../Components/Fragments/RouteElement/Home/Penanda/PenandaEl"

const RouteHeroSection = () => {
    const router = useRoutes([
        {
            path: "new-read",
            element: <BaruDibacaEl />
        },
        {
            path: "marker",
            element: <PenandaEl />
        },
        
    ])
  return router
}

export default RouteHeroSection
