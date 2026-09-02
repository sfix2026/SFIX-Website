import "./Footer.css"

import { Link } from "react-scroll"

import { motion } from "framer-motion"

import { useContext } from "react"

import { LanguageContext } from "../LanguageContext"



function Footer(){

  const { text, lang } = useContext(LanguageContext)


  return(

    <footer className="footer">


      <motion.div

        className="footer-logo"

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1
        }}

        viewport={{
          once:false,
          amount:.5
        }}

      >

        SFIX

      </motion.div>



      <motion.p

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1,
          delay:.2
        }}

        viewport={{
          once:false,
          amount:.5
        }}

        dir={lang === "fa" ? "rtl" : "ltr"}

      >

        {text.footer.description}

      </motion.p>



      <motion.div

        className="footer-links"

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1,
          delay:.4
        }}

        viewport={{
          once:false,
          amount:.5
        }}

      >


        <Link
          to="hero"
          smooth={true}
          duration={800}
        >
          {text.footer.home}
        </Link>


        <Link
          to="about"
          smooth={true}
          duration={800}
        >
          {text.footer.about}
        </Link>


        <Link
          to="portfolio"
          smooth={true}
          duration={800}
        >
          {text.footer.projects}
        </Link>


        <Link
          to="contact"
          smooth={true}
          duration={800}
        >
          {text.footer.contact}
        </Link>


      </motion.div>



      <div
        className="footer-bottom"
        dir={lang === "fa" ? "rtl" : "ltr"}
      >

        {text.footer.copyright}

      </div>


    </footer>

  )

}


export default Footer