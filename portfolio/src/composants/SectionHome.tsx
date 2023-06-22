import "../styles/sectionhome.css"
import github from '../images/logos/github.svg'
import linkedin from '../images/logos/linkedin.svg'
import at from '../images/logos/at-solid.svg'
import info from '../images/logos/info.svg'
import photo from '../images/portrait-rond-exemple.png'

export const SectionHome = () => {
    return (
        <section className="section">
            <img className="img-profile" src={photo} />
            <h1 className="h1">Antoine Goudaillier</h1>
            <p className="centrer">Etudiant en développement</p>
            <div className="centrer">
                <a href="#" className="logos" /*target="blank"*/><img src={github} /></a>
                <a href="#" className="logos" ><img src={linkedin}  /></a>
                <a href="#" className="logos" ><img src={at} /></a>
                <a href="#" className="logos" ><img src={info} /></a>
            </div>
        </section>
    )
}