import "./Navbar.css"
import { useState, useContext } from "react"
import { Link } from "react-scroll"
import { LanguageContext } from "../LanguageContext"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const {
    toggleLanguage,
    lang,
    text
  } = useContext(LanguageContext)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (

    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>

      <div className="nav-logo">
        SFI<span className="logo-x">X</span>
      </div>


      <div className="nav-links">

        <Link
          to="about"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          {text.navbar.about}
        </Link>

        <Link
          to="services"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          {text.navbar.services}
        </Link>

        <Link
          to="portfolio"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          {text.navbar.projects}
        </Link>

        <Link
          to="process"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          {text.navbar.process}
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          {text.navbar.contact}
        </Link>

      </div>


      <div className="nav-right">

        <span
          className="language-button"
          onClick={toggleLanguage}
        >
          {lang === "en" ? "FA" : "EN"}
        </span>


        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </nav>

  )
}

export default Navbar