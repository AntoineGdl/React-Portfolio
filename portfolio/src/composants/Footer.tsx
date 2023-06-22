import sun from '../images/logos/sun-solid.svg'
import '../styles/footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
                <div className="f">
                    <p>&copy; Antoine Goudaillier</p>
                        <a href="#" ><img className="logos" src={sun} width={20} /></a>

            </div>
        </footer>
    )
}