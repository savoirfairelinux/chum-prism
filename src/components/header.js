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
        <img
          src={"/prism.png"}
          alt="Prism"
          className={headerStyles.logo}
          style={
            url === "/" || url === "/forms"
              ? { width: "25rem" }
              : { width: "15rem" }
          }
        />
      </Link>
    </div>
  )
}

export default Header
