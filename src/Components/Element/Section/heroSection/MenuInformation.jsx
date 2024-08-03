import { Link } from "react-router-dom";

const MenuInformation = () => {
  const dataMenu = [
    {
      id: 1,
      title: "Tentang Al Quran",
      path: "/about-alquran",
    },
    {
      id: 2,
      title: "Surah Al Mulk",
      path: "/surah-al-mulk",
    },
    {
      id: 3,
      title: "Surah Yassen",
      path: "/surah-yasin",
    },
    {
      id: 4,
      title: "Surah Al Kafh",
      path: "/surah-al-kafh",
    },
    {
      id: 5,
      title: "Surah Al Waqiah",
      path: "/surah-al-waqiah",
    },
  ];
  return (
    <>
      {dataMenu?.map((res) => (
        <Link key={res.id} className="text-primary transition-global duration-300 hover:text-bgSecondary">{res.title}</Link>
      ))}
    </>
  );
};

export default MenuInformation;
