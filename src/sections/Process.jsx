import "./Process.css"

import { motion } from "framer-motion"

import { useContext } from "react"

import { LanguageContext } from "../LanguageContext"



function Process(){

  const { text, lang } = useContext(LanguageContext)


  return(

    <section
      id="process"
      className="process"
    >


      <div className="small-title">

        {text.process.small}

      </div>



      <h2 dir={lang === "fa" ? "rtl" : "ltr"}>

        {text.process.title}

      </h2>



      <div className="process-timeline">



        {/* PROCESS 01 */}

        <motion.div

          className="process-card"

          initial={{
            opacity:0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:false,
            amount:.3
          }}

          whileHover={{
            y:-12,
            scale:1.03
          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >

          <span>
            01
          </span>

          <h3>
            {text.process.card1.title}
          </h3>

          <p>
            {text.process.card1.description}
          </p>

        </motion.div>



        {/* PROCESS 02 */}

        <motion.div

          className="process-card"

          initial={{
            opacity:0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:false,
            amount:.3
          }}

          whileHover={{
            y:-12,
            scale:1.03
          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >

          <span>
            02
          </span>

          <h3>
            {text.process.card2.title}
          </h3>

          <p>
            {text.process.card2.description}
          </p>

        </motion.div>



        {/* PROCESS 03 */}

        <motion.div

          className="process-card"

          initial={{
            opacity:0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:false,
            amount:.3
          }}

          whileHover={{
            y:-12,
            scale:1.03
          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >

          <span>
            03
          </span>

          <h3>
            {text.process.card3.title}
          </h3>

          <p>
            {text.process.card3.description}
          </p>

        </motion.div>



        {/* PROCESS 04 */}

        <motion.div

          className="process-card"

          initial={{
            opacity:0,
            y:60
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          viewport={{
            once:false,
            amount:.3
          }}

          whileHover={{
            y:-12,
            scale:1.03
          }}

          dir={lang === "fa" ? "rtl" : "ltr"}

        >

          <span>
            04
          </span>

          <h3>
            {text.process.card4.title}
          </h3>

          <p>
            {text.process.card4.description}
          </p>

        </motion.div>



      </div>



    </section>

  )

}


export default Process