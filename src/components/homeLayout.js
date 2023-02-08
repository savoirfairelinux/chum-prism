import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import HomeConsentPopup from "./homeConsentPopup"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div id="content" className={layoutStyles.contentHome}>
        <Header />
        <div className={layoutStyles.main}>{props.children}</div>
        <Footer />
      </div>
      <HomeConsentPopup/>
    </div>
  )
}

export default Layout
