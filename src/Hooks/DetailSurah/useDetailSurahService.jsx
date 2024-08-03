import { useQuery } from "react-query"
import {alquranServicesSurah } from "../../Services/alquran.services"

const useDetailSurahService = (id) => {
    const {data, isLoading, error} = useQuery({
        queryFn: () => {
            return alquranServicesSurah(id)
        }
    })
  return {
    data,
    isLoading,
    error
  }
}

export default useDetailSurahService
