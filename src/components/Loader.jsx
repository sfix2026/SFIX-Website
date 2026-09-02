import "./Loader.css"
import { motion } from "framer-motion"

function Loader(){

return(

<div className="loader">


<motion.div

className="loader-logo"

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

>
SFI<span>X</span>
</motion.div>



<motion.div

className="loader-text"

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
duration:1,
delay:.5
}}

>
DIGITAL EXPERIENCES
</motion.div>


</div>

)

}

export default Loader