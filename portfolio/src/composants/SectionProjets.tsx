import "../styles/sectionprojets.css"

export const SectionProjets = () => {
    return (
        <section>
            <h1 className="titre-principal">Projets</h1>

            <h2 className="nom-projet"><a href="#">Générateur de mots de passe</a></h2>
            <p className="derniere-maj">Dernière mise à jour : 10 avril 2023</p>
            <p className="description-brève">Ce projet a pour but de générer vos mots de passe à l'aide d'un algorithme python suivant plusieurs degrés de complexité.</p>
            
            <h2 className="nom-projet"><a href="#">Portfolio</a></h2>
            <p className="derniere-maj">Dernière mise à jour : avril 2023</p>
            <p className="description-brève">Création de mon Portfolio personnel sur lequel vous êtes actuellement qui me présente et rassemble l'ensemble de mes projets.</p>
        </section>
    )
}