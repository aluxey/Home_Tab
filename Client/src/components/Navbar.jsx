import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">HomeTab</Link>
        <div className="nav-links">
          <NavLink to="/" end>Accueil</NavLink>
          <a href="#services">Services</a>
        </div>
      </div>
    </nav>
  )
}
