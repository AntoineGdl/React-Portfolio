import { Navbar } from "../composants/Navbar"
import { SectionHome } from "../composants/SectionHome"
import { Footer } from "../composants/Footer"

export const Home = () => {
    return(
        <div>
            <Navbar/>
            <SectionHome/>
            <Footer/>
        </div>
    )
}