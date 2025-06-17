import { NavLink } from "react-router-dom";
import Hero from "../home/Hero";
import Actualite from "./Actualite";

function Home() {
  return (
    <main className="home"> 
      <section className="Hero">
        <Hero />
      </section>

      <section className="actualite">
        <Actualite />
      </section>
      
      <section className="map-container">
      <h2>Où nous trouver ?</h2>
      <div className="map-iframe-wrapper">
        <iframe
          title="Localisation du restaurant"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.649367091124!2d5.656953700000001!3d46.2571979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478cbd96d570b0e9%3A0x42faac12db0159a6!2sBelli%20Food!5e0!3m2!1sfr!2sfr!4v1750169126055!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    
    </main>
  );
}
export default Home;
