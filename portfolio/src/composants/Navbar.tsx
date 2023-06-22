import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="gauche">
                    <NavLink to ='/'>Antoine Goudaillier</NavLink>
                </div>

                <div className="droite">
                    <NavLink to='/projets'>Projets</NavLink>
                    <NavLink to='/about'>A propos</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
            </nav>
        </header>
    )
}