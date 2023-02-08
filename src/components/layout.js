import React from "react"

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import ConsentPopup from "./consentPopup"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div
        id="content"
        className={layoutStyles.content}
      >
        <Header />
        <div className={layoutStyles.main}>{props.children}</div>
        <Footer />
      </div>
      <Sidebar />
      <ConsentPopup/>
    </div>
  )
}

export default Layout
