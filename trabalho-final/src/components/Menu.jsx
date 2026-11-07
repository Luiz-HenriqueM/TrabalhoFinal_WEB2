import { Link } from 'react-router-dom'
import estilos from './Menu.module.css'

function Menu({ quantidade }) {
  return (
    <nav className={estilos.menu}>
      <Link to="/">Buscar séries</Link>
      <Link to="/series">Minhas séries ({quantidade})</Link>
    </nav>
  )
}

export default Menu