import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const MainHeader = props => {
  const [url, setUrl] = React.useState("")

  React.useEffect(() => {
    setUrl(window.location.pathname)
  }, [])

  return (
    <div className={headerStyles.headerMain}>
      <div>
      </div>
      <div>
        <Link to="/main">      
          <img
            src={"/prism.png"}
            alt="Prism"
            className={headerStyles.logo2}
          />
        </Link>
      </div>
      <div className={headerStyles.homeButtonsHeader}>
        <a
          href="/main"
          onClick={() => {
            localStorage.setItem("language", "en")
          }}
        >
          <button>EN</button>
        </a>
        <a
          href="/main"
          onClick={() => {
            localStorage.setItem("language", "fr")
            console.log("test")
          }}
        >
          <button>FR</button>
        </a>
      </div>
    </div>
  )
}

export default MainHeader
