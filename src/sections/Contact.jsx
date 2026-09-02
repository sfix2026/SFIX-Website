import "./Contact.css"

import { motion } from "framer-motion"

import { useContext } from "react"

import { LanguageContext } from "../LanguageContext"



function Contact(){

  const { text, lang } = useContext(LanguageContext)


  return(

    <section
      id="contact"
      className="contact"
    >


      <motion.div

        className="small-title"

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
          amount:.4
        }}

      >

        {text.contact.small}

      </motion.div>



      <motion.h2

        initial={{
          opacity:0,
          y:40
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
          amount:.4
        }}

        dir={lang === "fa" ? "rtl" : "ltr"}

      >

        {text.contact.title}

        <span>
          {text.contact.highlight}
        </span>

      </motion.h2>



      <p dir={lang === "fa" ? "rtl" : "ltr"}>

        {text.contact.description}

        <br />

        {text.contact.platform}

      </p>



      <motion.div

        className="contact-box"

        initial={{
          opacity:0,
          y:50
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
          amount:.4
        }}

      >


        <motion.a

          href="https://t.me/SePeHr_sf01"

          target="_blank"

          rel="noopener noreferrer"

          whileHover={{
            y:-5,
            scale:1.05
          }}

        >

          Telegram

        </motion.a>



        <motion.a

          href="https://wa.me/989178285270"

          target="_blank"

          rel="noopener noreferrer"

          whileHover={{
            y:-5,
            scale:1.05
          }}

        >

          WhatsApp

        </motion.a>



        <motion.a

          href="mailto:sfix2026@gmail.com"

          whileHover={{
            y:-5,
            scale:1.05
          }}

        >

          Email

        </motion.a>


      </motion.div>



    </section>

  )

}


export default Contact