import "./Services.css"
import { motion } from "framer-motion"
import { useContext } from "react"
import { LanguageContext } from "../LanguageContext"


function Services(){

  const { text, lang } = useContext(LanguageContext)


  return(

    <section
      id="services"
      className="services"
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

        {text.services.small}

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

        {text.services.title}

      </motion.h2>





      <motion.div

        className="services-grid"

        initial="hidden"

        whileInView="show"

        viewport={{
          once:false,
          amount:.3
        }}

        variants={{
          hidden:{
            opacity:0
          },

          show:{
            opacity:1,
            transition:{
              staggerChildren:.2
            }
          }

        }}

      >



        <motion.div

          className="service-card"

          variants={{
            hidden:{
              opacity:0,
              y:50
            },

            show:{
              opacity:1,
              y:0
            }
          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >

          <div className="service-number">
            <span></span>
            01
          </div>

          <h3>
            {text.services.card1.title}
          </h3>

          <p>
            {text.services.card1.description}
          </p>

        </motion.div>





        <motion.div

          className="service-card"

          variants={{
            hidden:{
              opacity:0,
              y:50
            },

            show:{
              opacity:1,
              y:0
            }
          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >

          <div className="service-number">
            <span></span>
            02
          </div>

          <h3>
            {text.services.card2.title}
          </h3>

          <p>
            {text.services.card2.description}
          </p>

        </motion.div>





        <motion.div

          className="service-card"

          variants={{
            hidden:{
              opacity:0,
              y:50
            },

            show:{
              opacity:1,
              y:0
            }
          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >

          <div className="service-number">
            <span></span>
            03
          </div>

          <h3>
            {text.services.card3.title}
          </h3>

          <p>
            {text.services.card3.description}
          </p>

        </motion.div>



      </motion.div>


    </section>

  )

}


export default Services