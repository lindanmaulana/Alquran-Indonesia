import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const BaruDibacaEl = () => {
  const selector = useSelector(state => state.home.penandaSection.new)
  console.log(selector)
  return (
    <div className="flex gap-2">
      {selector.length !== 0 ? selector?.map(res => (
      <Link to={`/surah/${res.id}`} key={res.id} className="text-sm border-b border-white text-primary hover:text-white/40 hover:border-white/40">{res.name}, </Link>
    )) : <h2 className="text-sm text-primary ">Anda Belum memiliki sesi membaca apapun</h2>}
    </div>
  )
}

export default BaruDibacaEl
