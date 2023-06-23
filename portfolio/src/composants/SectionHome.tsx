import "../styles/sectionhome.css"
// import github from '../images/logos/github.svg'
// import linkedin from '../images/logos/linkedin.svg'
// import at from '../images/logos/at-solid.svg'
// import info from '../images/logos/info.svg'
import photo from '../images/portrait-rond-exemple.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { faInfo } from "@fortawesome/free-solid-svg-icons"

export const SectionHome = () => {
    return (
        <section className="section">
            <img className="img-profile" src={photo} />
            <h1 className="h1">Antoine Goudaillier</h1>
            <p className="centrer">Etudiant en développement</p>
            <div className="centrer">
                <a href="#" className="logos"><FontAwesomeIcon className="icon" icon={faGithub} style={{color: "#71689e"}} /></a>
                <a href="#" className="logos"><FontAwesomeIcon className="icon" icon={faLinkedin} style={{color: "#71689e"}} /></a>
                <a href="#" className="logos"><FontAwesomeIcon className="icon" icon={faAt} style={{color: "#71689e"}} /></a>
                <a href="#" className="logos"><FontAwesomeIcon className="icon" icon={faInfo} style={{color: "#71689e"}} /></a>
            </div>
        </section>
    )
}