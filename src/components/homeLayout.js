import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div id="content" className={layoutStyles.content}>
        <Header />
        <div className={layoutStyles.main}>{props.children}</div>
      </div>
    </div>
  )
}

export default Layout
