import { Link } from "react-router-dom"

const List = (props) => {
    const {path, icon, title} = props
  return (
    <Link to={path} className="flex items-center gap-3 border-b border-white/20 py-2 text-sm group">
      {icon}
      <span className="text-primary">{title}</span>
    </Link>
  )
}

export default List
