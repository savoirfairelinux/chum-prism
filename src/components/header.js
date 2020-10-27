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
        {(url === "/" || url === "/forms") ?         
        <img
          src={"/prism.png"}
          alt="Prism"
          className={headerStyles.logo1}
        /> 
        : 
        <img
        src={"/prism.png"}
        alt="Prism"
        className={headerStyles.logo2}
      />}
      </Link>
    </div>
  )
}

export default Header
