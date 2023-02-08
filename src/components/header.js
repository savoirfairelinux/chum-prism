import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = props => {
  const [url, setUrl] = React.useState("")

  React.useEffect(() => {
    setUrl(window.location.pathname)
  }, [])

  return (
    <div className={headerStyles.header}>
      {url === "/" || url === "/forms" ? (
        <div className={headerStyles.headerHomePageImages}>
          <a href="https://ciusss-centresudmtl.gouv.qc.ca/aire-ouverte">
            <img
              src={"/aire_ouverte.png"}
              alt="Aire ouverte"
              className={headerStyles.logo3}
            />
          </a>
          <Link to="/">
            <img
              src={"/prism.png"}
              alt="Prism"
              className={headerStyles.logo1}
            />
          </Link>
          <div className={headerStyles.logo3}>
            <a href="https://ciusss-estmtl.gouv.qc.ca/" target="_blank"><img src={"/CIUSSS_logo.png"} alt="CIUSSS" /></a>
          </div>
        </div>
      ) : (
        <div className={headerStyles.headerHomePageImages}>
          <a href="https://ciusss-centresudmtl.gouv.qc.ca/aire-ouverte">
            <img
              src={"/aire_ouverte.png"}
              alt="Aire ouverte"
              className={headerStyles.logo3}
            />
          </a>
          <Link to="/">
            <img
              src={"/prism.png"}
              alt="Prism"
              className={headerStyles.logo2}
            />
          </Link>
          <div className={headerStyles.logo3}>
            <a href="https://ciusss-estmtl.gouv.qc.ca/" target="_blank"><img src={"/CIUSSS_logo.png"} alt="CIUSSS" /></a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
