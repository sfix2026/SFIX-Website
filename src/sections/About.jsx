import "./About.css"

import { useContext } from "react"

import { LanguageContext } from "../LanguageContext"

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion"



function About(){

  const { text, lang } = useContext(LanguageContext)

  const { scrollY } = useScroll()

  const contentOpacity = useTransform(
    scrollY,
    [900,2200],
    [1,0]
  )



  return(

    <section
      id="about"
      className="about"
    >



      <motion.div

        className="about-logo"

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1.2,
          ease:[0.22,1,0.36,1]
        }}

        viewport={{
          once:false
        }}

      >

        <div className="about-s">

          <div className="s-core">
            S
          </div>

          <div className="s-ring"></div>

          <div className="s-ring-two"></div>

        </div>

      </motion.div>





      <motion.div

        className="about-content"

        style={{
          opacity:contentOpacity
        }}

        initial={{
          y:20
        }}

        whileInView={{
          y:0
        }}

        transition={{
          duration:1
        }}

        viewport={{
          once:false,
          amount:.4
        }}

        dir={lang === "fa" ? "rtl" : "ltr"}

      >



        <div className="small-title">
          {text.about.small}
        </div>



        <h2>

          {text.about.title1}

          <span>
            {text.about.title2}
          </span>

          {text.about.title3}

        </h2>





        <p>

          {text.about.paragraph1}

          <span>
            {text.about.highlight1}
          </span>

          {text.about.paragraph2}

          <span>
            {text.about.highlight2}
          </span>

          {text.about.paragraph3}

        </p>





        <p>

          {text.about.paragraph4}

          <span>
            {text.about.highlight3}
          </span>

          {text.about.paragraph5}

          <span>
            {text.about.highlight4}
          </span>

          {text.about.paragraph6}

        </p>



      </motion.div>



    </section>

  )

}



export default About