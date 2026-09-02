import { createContext, useState } from "react"

import { languages } from "./language"


export const LanguageContext = createContext()



export function LanguageProvider({children}){


const [lang,setLang] = useState("en")



const toggleLanguage = ()=>{

setLang(
lang === "en" ? "fa" : "en"
)

}



return(

<LanguageContext.Provider

value={{

lang,

setLang,

toggleLanguage,

text: languages[lang]

}}

>


{children}


</LanguageContext.Provider>


)


}