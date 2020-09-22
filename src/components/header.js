import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = props => {
  console.log(props.indexLogo)
  return (
    <div className={headerStyles.header}>
      <Link to="/">
        <img
          src={"/prism.png"}
          alt="Prism"
          className={headerStyles.logo}
          style={
            window.location.pathname == "/" ||
            window.location.pathname == "/forms"
              ? { width: "25rem" }
              : { width: "15rem" }
          }
        />
      </Link>
    </div>
  )
}

export default Header
