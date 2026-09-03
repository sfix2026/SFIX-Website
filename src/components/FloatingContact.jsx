import "./FloatingContact.css"
import { Link } from "react-scroll"

function FloatingContact() {

  return (

    <div className="floating-contact">

      <span className="contact-title">
        Contact US
      </span>


      <Link
        to="contact"
        smooth={true}
        duration={800}
        className="mobile-contact-icon"
      >
        💬
      </Link>


      <div className="contact-links">

        <a
          href="https://t.me/SePeHr_sf01"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>

        <a
          href="https://wa.me/989178285270"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <a href="mailto:sfix2026@gmail.com">
          Email
        </a>

        <a href="#">
          Freelance
        </a>

      </div>

    </div>

  )
}

export default FloatingContact