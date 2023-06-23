import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (
        <footer className="footer">
                <div className="f">
                    <p>&copy; Antoine Goudaillier</p>
                        <a href="#"><FontAwesomeIcon className='soleil' icon={faSun} style={{color: "#71689e"}} /></a>

            </div>
        </footer>
    )
}