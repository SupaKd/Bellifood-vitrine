
function Actualite() {
    return(
        <section className="actualites">
        <h2>Actualités</h2>
        <div className="actualites__list">
          <div className="actualite">
            <h3>🔥 Nouveau : Tacos Raclette !</h3>
            <p>Disponible tout l’hiver avec fromage fondant et viande au choix.</p>
          </div>
          <div className="actualite">
            <h3>⏰ Fermeture exceptionnelle</h3>
            <p>Le restaurant sera fermé le 1er mai pour la fête du travail.</p>
          </div>
          <div className="actualite">
            <h3>🎉 Promo du mois</h3>
            <p>1 menu acheté = 1 boisson offerte tous les mardis !</p>
          </div>
        </div>
      </section>
    )
}
export default Actualite;