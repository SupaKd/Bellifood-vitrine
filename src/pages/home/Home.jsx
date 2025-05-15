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
      
      <div className="background-home">
        <section className="propos">
          <div className="apropos__overlay">
            
            <h2>Une question ?</h2>
            <NavLink to="contact">
              <button>Contactez-nous</button>
            </NavLink>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Home;
