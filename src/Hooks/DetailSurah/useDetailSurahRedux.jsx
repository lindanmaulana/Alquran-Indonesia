import { useSelector } from 'react-redux'

const useDetailSurahRedux = () => {
    const selector = useSelector(state => state.detailSurah)
  return selector
}

export default useDetailSurahRedux
