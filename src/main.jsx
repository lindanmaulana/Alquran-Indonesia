import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./Pages/HomePages.jsx";
import { Provider } from "react-redux";
import store from "./Redux/Store/store.js";
import ErrorFallbackBoundary from "./Pages/404.jsx";
import { alquranServices } from "./Services/alquran.services.js";
import DetailSurahPages from "./Pages/DetailSurahPages.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePages />,
    loader: alquranServices,
    errorElement: <ErrorFallbackBoundary />,
  },
  {
    path: "/surah/:id/*",
    element: <DetailSurahPages />,
    errorElement: <ErrorFallbackBoundary />,
  },
  {
    path: "/tentang-alquran",
    element: "",
  },
  {
    path: "/surah-al-mulk",
    element: "",
  },
  {
    path: "/surah-al-kafh",
    element: "",
  },
  {
    path: "/surah-al-waqiah",
    element: "",
  },
  {
    path: "*",
    element: <ErrorFallbackBoundary />,
  },
]);
const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
