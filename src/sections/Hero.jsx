import HeroX from "../components/HeroX"
import ScrollIndicator from "../components/ScrollIndicator"
import FloatingContact from "../components/FloatingContact"
import { useContext, useEffect, useState } from "react"

import { LanguageContext } from "../LanguageContext"

import "./Hero.css"

import { Link } from "react-scroll"

import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion"



function Hero(){

const { text, lang } = useContext(LanguageContext)



const { scrollY } = useScroll()



const glowOpacity = useTransform(
  scrollY,
  [0,500],
  [0.35,0.12]
)



const xMove = useTransform(
  scrollY,
  [0,500],
  [0,280]
)



const xScale = useTransform(
  scrollY,
  [0,500],
  [1,0.65]
)



const smoothX = useSpring(
  xMove,
  {
    stiffness:70,
    damping:28,
    mass:.6
  }
)



const smoothScale = useSpring(
  xScale,
  {
    stiffness:70,
    damping:28,
    mass:.6
  }
)



const textOpacity = useTransform(
  scrollY,
  [0,300],
  [1,0]
)



const paragraphOpacity = useTransform(
  scrollY,
  [100,400],
  [1,0]
)



const buttonsOpacity = useTransform(
  scrollY,
  [200,500],
  [1,0]
)



const [isMobile,setIsMobile] = useState(false)



useEffect(()=>{

  const check = ()=>{
    setIsMobile(window.innerWidth <= 768)
  }

  check()

  window.addEventListener(
    "resize",
    check
  )

  return ()=>{
    window.removeEventListener(
      "resize",
      check
    )
  }

},[])



return(

<section
id="hero"
className="hero"
>



<div
className="hero-content"
dir={lang === "fa" ? "rtl" : "ltr"}
>



<motion.div

className="small-title"

initial={{
  opacity:0,
  y:40
}}

animate={{
  opacity:1,
  y:0
}}

transition={{
  duration:.8,
  delay:.3,
  ease:[.22,1,.36,1]
}}

>

{text.hero.small}

</motion.div>





<motion.h1

initial={{
  opacity:0,
  y:70
}}

animate={{
  opacity:1,
  y:0
}}

transition={{
  duration:1,
  delay:.5,
  ease:[.22,1,.36,1]
}}

style={{
  opacity:textOpacity
}}

>

{text.hero.title1}

<span> SFIX</span>

<br/>

{text.hero.title2}

<br/>

{text.hero.title3}

</motion.h1>





<motion.p

initial={{
  opacity:0,
  y:40
}}

animate={{
  opacity:1,
  y:0
}}

transition={{
  duration:1,
  delay:.8,
  ease:[.22,1,.36,1]
}}

style={{
  opacity:paragraphOpacity
}}

>

{text.hero.description}

</motion.p>





<motion.div

className="hero-buttons"

initial={{
  opacity:0,
  y:40
}}

animate={{
  opacity:1,
  y:0
}}

transition={{
  duration:1,
  delay:1,
  ease:[.22,1,.36,1]
}}

style={{
  opacity:buttonsOpacity
}}

>



<Link

to="portfolio"

smooth={true}

duration={800}

className="btn-primary"

>

{text.hero.button1}

</Link>





<Link

to="contact"

smooth={true}

duration={800}

className="btn-secondary"

>

{text.hero.button2}

</Link>



</motion.div>



</div>





<motion.div

className="hero-visual"

initial={{
  opacity:0,
  x:120,
  scale:.85
}}

animate={{
  opacity:1,
  x:0,
  scale:1
}}

transition={{
  duration:1.4,
  delay:.5,
  ease:[.22,1,.36,1]
}}

>



<motion.div

style={{

  x:isMobile ? 0 : smoothX,

  scale:isMobile ? 1 : smoothScale

}}

>

<HeroX

glowOpacity={
  isMobile ? .12 : glowOpacity
}

/>

</motion.div>



</motion.div>





<ScrollIndicator/>


<FloatingContact/>



</section>

)

}


export default Hero