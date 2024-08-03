import List from "./List";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdRadio, IoIosRadio, IoIosInformationCircle } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { BiSolidInfoSquare } from "react-icons/bi";
import { AiFillQuestionCircle } from "react-icons/ai";
const Navbar = () => {
  const dataNavigasi = [
    {
      id: 1,
      path: "/",
      title: "Halaman Utama",
      icon: <IoHomeSharp className="text-white/20 group-hover:text-primary" />,
    },
    {
      id: 2,
      path: "/radio",
      title: "Radio Alquran",
      icon: <IoMdRadio className="text-white/20 group-hover:text-primary" />,
    },
    {
      id: 3,
      path: "/qari",
      title: "Qari",
      icon: <IoIosRadio className="text-white/20 group-hover:text-primary" />,
    },
    {
      id: 4,
      path: "/tentang-kami",
      title: "Tentang Kami",
      icon: (
        <IoIosInformationCircle className="text-white/20 group-hover:text-primary" />
      ),
    },
    {
      id: 5,
      path: "/pribadi",
      title: "Pribadi",
      icon: <FaLock className="text-white/20 group-hover:text-primary" />,
    },
    {
      id: 6,
      path: "/masukan",
      title: "Beri Masukan",
      icon: (
        <BiSolidInfoSquare className="text-white/20 group-hover:text-primary" />
      ),
    },
    {
      id: 7,
      path: "/bantuan",
      title: "Bantuan",
      icon: (
        <AiFillQuestionCircle className="text-white/20 group-hover:text-primary" />
      ),
    },
  ];
  return (
    <>
      {dataNavigasi?.map((res) => (
        <List
          key={res.id}
          path={res.path}
          title={res.title}
          icon={res.icon}
        ></List>
      ))}
    </>
  );
};

export default Navbar;
