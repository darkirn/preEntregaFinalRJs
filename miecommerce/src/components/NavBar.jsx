
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <nav className="navbar">
        <Link to="/" className="logo"> <h1>Fungi Gardens</h1></Link>
        <ul className="menu">
          <li> <Link className="menu-link" to='/'>Inicio </Link></li>
          <li> <Link className="menu-link" to='/productos'>productos </Link></li>
          <li> <Link className="menu-link" to='/productos/medias'>medias </Link></li>
          <li> <Link className="menu-link" to='/Productos/pantalones'>pantalones </Link></li>
          <li> <Link className="menu-link" to='/Productos/remeras'>remeras </Link></li>
          <li> <Link className="menu-link" to='/productos/buzos'>buzos </Link></li>
          
          <li><CartWidget/></li>
        </ul>
      </nav>
    )
}

export default NavBar