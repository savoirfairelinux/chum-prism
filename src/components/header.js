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
      <Link to="/">
        {url === "/" || url === "/forms" ? (
          <div className={headerStyles.headerHomePageImages}>
            <img
              src={"/aire_ouverte.png"}
              alt="Aire ouverte"
              className={headerStyles.logo3}
            />
            <img
              src={"/prism.png"}
              alt="Prism"
              className={headerStyles.logo1}
            />
            <div className={headerStyles.logo3}></div>
          </div>
        ) : (
          <div className={headerStyles.headerHomePageImages}>
            <img
              src={"/aire_ouverte.png"}
              alt="Aire ouverte"
              className={headerStyles.logo3}
            />
            <img
              src={"/prism.png"}
              alt="Prism"
              className={headerStyles.logo2}
            />
            <div className={headerStyles.logo3}></div>
          </div>
        )}
      </Link>
    </div>
  )
}

export default Header
