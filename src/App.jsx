import { useEffect, useState } from "react"

import Loader from "./components/Loader"

import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Services from "./sections/Services"
import Portfolio from "./sections/Portfolio"
import Process from "./sections/Process"
import Contact from "./sections/Contact"

import Footer from "./components/Footer"

import { LanguageProvider } from "./LanguageContext"

function App() {


  const [loading,setLoading] = useState(true)



  useEffect(()=>{


    const timer = setTimeout(()=>{

      setLoading(false)

    },2500)


    return ()=>clearTimeout(timer)


  },[])



  return (

    <LanguageProvider>
    
    
    {
    loading ? (
    
    <Loader />
    
    ) : (
    
    <div className="app-show">
    
    <Navbar />
    
    <Hero />
    
    <About />
    
    <Services />
    
    <Portfolio />
    
    <Process />
    
    <Contact />
    
    <Footer />
    
    </div>
    
    )
    
    }
    
    
    </LanguageProvider>
    
    )

}


export default App