import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { alquranServices } from "../Services/alquran.services";
import { useEffect } from "react";
import { handleDataSurahLengkap } from "../Redux/Slices/FeatureDataSurahLengkap";

const useDataSurah = () => {
  const { data, isLoading, error } = useQuery('data surah', alquranServices)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleDataSurahLengkap(data));
  }, [data, dispatch]);

  const selector = useSelector((state) => state.data.data);

  return {
    isLoading,
    error,
    selector
  };
};

export default useDataSurah;
