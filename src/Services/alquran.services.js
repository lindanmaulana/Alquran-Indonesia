import { axiosAlquran } from "../Lib/axiosAlquran";

export const alquranServices = async () => {
  try {
    const res = await axiosAlquran.get("/surah",);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const alquranServicesSurah = async (id) => {
  try {
    const res = await axiosAlquran.get(`/surah/${id}`)

    return res.data
  }catch(err) {
    console.log(err)
    throw new Error("Gagal fetching data: ", err )
  }
}
