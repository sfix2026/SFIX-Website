import "./Portfolio.css"

import { motion } from "framer-motion"

import { useContext } from "react"

import { LanguageContext } from "../LanguageContext"



function Portfolio(){

  const { text, lang } = useContext(LanguageContext)


  return(

    <section
      id="portfolio"
      className="portfolio"
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

        {text.projects.small}

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

        {text.projects.title}

      </motion.h2>





      <motion.div

        className="projects-grid"

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



        {/* PROJECT 01 */}

        <motion.div

          className="project-card"

          whileHover={{
            y:-12,
            scale:1.03
          }}

          variants={{

            hidden:{
              opacity:0,
              y:60
            },

            show:{
              opacity:1,
              y:0
            }

          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >


          <div className="project-image">

            <div className="preview-window">

              <div className="preview-top">
                <span></span>
              </div>


              <div className="preview-content">

                <h4>
                  SFIX
                </h4>

                <div className="preview-line"></div>

                <div className="preview-line small"></div>

              </div>

            </div>

          </div>


          <h3>
            {text.projects.card1.title}
          </h3>


          <p>
            {text.projects.card1.description}
          </p>


        </motion.div>





        {/* PROJECT 02 */}

        <motion.div

          className="project-card"

          whileHover={{
            y:-12,
            scale:1.03
          }}

          variants={{

            hidden:{
              opacity:0,
              y:60
            },

            show:{
              opacity:1,
              y:0
            }

          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >


          <div className="project-image">

            <div className="preview-window ecommerce">

              <div className="preview-top">
                <span></span>
                <span></span>
              </div>


              <div className="preview-content">

                <h4>
                  SHOP
                </h4>

                <div className="preview-line"></div>

                <div className="preview-line small"></div>

              </div>

            </div>

          </div>


          <h3>
            {text.projects.card2.title}
          </h3>


          <p>
            {text.projects.card2.description}
          </p>


        </motion.div>





        {/* PROJECT 03 */}

        <motion.div

          className="project-card"

          whileHover={{
            y:-12,
            scale:1.03
          }}

          variants={{

            hidden:{
              opacity:0,
              y:60
            },

            show:{
              opacity:1,
              y:0
            }

          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >


          <div className="project-image">

            <div className="preview-window brand">

              <div className="preview-top">
                <span></span>
                <span></span>
                <span></span>
              </div>


              <div className="preview-content">

                <h4>
                  BRAND
                </h4>

                <div className="preview-line"></div>

                <div className="preview-line small"></div>

              </div>

            </div>

          </div>


          <h3>
            {text.projects.card3.title}
          </h3>


          <p>
            {text.projects.card3.description}
          </p>


        </motion.div>



      </motion.div>


    </section>

  )

}


export default Portfolio