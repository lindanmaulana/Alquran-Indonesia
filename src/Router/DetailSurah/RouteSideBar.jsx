import { useRoutes } from "react-router-dom"

const RouteSideBar = () => {
    const router = useRoutes([
        {
            path: "surah",
            element: ""
        },
        {
            path: "juz",
            element: ""
        },
        {
            path: "halaman",
            element: ""
        }
    ])
  return router
}

export default RouteSideBar
