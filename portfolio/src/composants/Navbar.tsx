import { NavLink } from "react-router-dom"
import "../styles/navbar.css"

export const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="gauche">
                    <p><NavLink to ='/'>Antoine Goudaillier</NavLink></p>
                </div>

                <div className="droite">
                    <p><NavLink to='/projets'>Projets</NavLink></p>
                    <p><NavLink to='/about'>A propos</NavLink></p>
                    <p><NavLink to='/contact'>Contact</NavLink></p>
                </div>
            </nav>
        </header>
    )
}