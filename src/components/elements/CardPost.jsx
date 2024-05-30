import { NavLink } from "react-router-dom"
import InfoPost from "./InfoPost"

const CardPost = ({ thumbnail, ...infoPost}) => {
  return (
    <NavLink to="/detail">
        <article className="mt-12">
        <img src={thumbnail} alt="" className="w-full rounded" />
        <InfoPost {...infoPost} />
    </article>
    </NavLink>
  )
}

export default CardPost