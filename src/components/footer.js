import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const [url, setUrl] = React.useState("")
  const [language, setLanguage] = React.useState("en")

  React.useEffect(() => {
    if (localStorage.getItem("language") != "") {
      setLanguage(localStorage.getItem("language"))
    }
    setUrl(window.location.pathname)
  }, [])

  const getFooterText = () => {

    if(language === "fr"){
      return(          
        <p>PRISM-ACCESS Esprits ouverts est un projet d’innovation dans les services de santé visant à améliorer l’accès des jeunes aux soins de santé mentale. Il est géré par le laboratoire Santé mentale des jeunes et technologies (SMJ-techno) 
        du Centre hospitalier de l'Université de Montréal est dirigé par la Chaire de recherche du Canada sur l’innovation et les technologies pour les services de soins de santé mentale pour les jeunes 
        <br/>
        <a href="https://www.ymhtech.com" target="_blank">www.ymhtech.com</a> / <a href="https://www.smjtechno.com" target="_blank">www.smjtechno.com</a></p>
      )
    }
    else if(language === "en" ) {
      return(          
        <p>PRISM-ACCESS Open Minds is a health services innovation project to improve access to mental health care for youth. It is managed by the Youth Mental Health and Technology (YMHTech) Lab at the University of Montreal Hospital Centre, 
        and led by the Canada Research Chair in Innovation and Technology for Youth Mental Health Services
        <br/>
        <a href="https://www.ymhtech.com" target="_blank">www.ymhtech.com</a> / <a href="https://www.smjtechno.com" target="_blank">www.smjtechno.com</a></p>
      )
    }
    else {
      return(          
        <p>PRISM-ACCESS Open Minds is a health services innovation project to improve access to mental health care for youth. It is managed by the Youth Mental Health and Technology (YMHTech) Lab at the University of Montreal Hospital Centre, 
        and led by the Canada Research Chair in Innovation and Technology for Youth Mental Health Services |
        <br/>PRISM-ACCESS Esprits ouverts est un projet d’innovation dans les services de santé visant à améliorer l’accès des jeunes aux soins de santé mentale. Il est géré par le laboratoire Santé mentale des jeunes et technologies (SMJ-techno) 
        du Centre hospitalier de l'Université de Montréal est dirigé par la Chaire de recherche du Canada sur l’innovation et les technologies pour les services de soins de santé mentale pour les jeunes 
        <br/>
        <a href="https://www.ymhtech.com" target="_blank">www.ymhtech.com</a> / <a href="https://www.smjtechno.com" target="_blank">www.smjtechno.com</a></p>
      )
    }
    
  }

  return (
    <div className={footerStyles.footerContainer}>
        <div className={footerStyles.footer}>
          <a href="https://www.chumontreal.qc.ca/crchum" target="_blank"><img src={"/crchum_logo.png"} alt="CR Chum" /></a>
          <a href="https://www.ymhtech.com" target="_blank"><img src={"/youth_menthal_health_logo.png"} alt="Youth menthal health" /></a>
          <a href="https://douglas.research.mcgill.ca/" target="_blank"><img src={"/logo_douglas.png"} alt="Douglas" /></a>
        </div>
        <div className={footerStyles.footerText}>
          {getFooterText()}
        </div>
    </div>
  )
}

export default Footer
