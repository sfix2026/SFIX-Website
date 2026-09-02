import "./HeroX.css"
import { motion } from "framer-motion"

function HeroX({ glowOpacity }) {

  return (

    <div className="hero-x-wrapper">

      {/* Main glow */}
      <motion.div
        className="hero-x-glow"
        style={{
          opacity: glowOpacity
        }}
      />

      {/* Speed lines */}
      <div className="hero-x-speed-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 3D X */}
      <div className="hero-x-3d">

        <div className="x-face x-main"></div>

        <div className="x-face x-depth"></div>

        <div className="x-highlight"></div>

      </div>

      {/* Digital floor */}
      <div className="hero-x-floor">

        <div className="floor-grid"></div>

        <div className="floor-glow"></div>

      </div>

    </div>

  )
}

export default HeroX