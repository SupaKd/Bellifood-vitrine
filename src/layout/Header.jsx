import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { toggleMenu } from "../features/menuSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMenuOpen } = useSelector((state) => state.menu);
  const [isFixed, setIsFixed] = useState(false);

  function handleClick() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isFixed ? "fixed" : ""}`}>
      <section className="logo">
        <NavLink to="/" end>
          <img src="image/belli.logo.webp" alt="logo" />
        </NavLink>
      </section>

      <section className="header-nav">
        <div
          className={`burger-menu ${isMenuOpen ? "rotate" : ""}`}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faArrowLeft : faBarsStaggered} />
        </div>
      </section>

      <section className="header-links">
        <nav className={`nav-links ${isMenuOpen ? "active slide-in" : ""}`}>
          <NavLink to="/" end className="log" onClick={handleClick}>
            <img src="image/belli.logo.webp" alt="logo" />
          </NavLink>
          <NavLink to="menu" end onClick={handleClick}>
            Menu
          </NavLink>

          <div className="reseau">
            <a href="https://www.instagram.com/belli.food01/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.tiktok.com/@bellifood" target="_blank">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>

          <div>
            <a
              className="location"
              href="https://www.google.com/maps/place/Belli+Food/@46.2572123,5.6466754,15z/data=!3m2!4b1!5s0x478cbd7eb052fe87:0xc43baed5ba4659c5!4m6!3m5!1s0x478cbd96d570b0e9:0x42faac12db0159a6!8m2!3d46.2571979!4d5.6569537!16s%2Fg%2F11tws8jbmd?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Où nous trouver ?
            </a>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Header;
