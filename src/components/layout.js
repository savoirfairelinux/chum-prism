import React from "react"

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div
        id="content"
        className={layoutStyles.content}
        style={props.index ? { width: "100%" } : { width: "85%" }}
      >
        <Header />
        <div className={layoutStyles.main}>{props.children}</div>
        <Footer />
      </div>
      <Sidebar />
    </div>
  )
}

export default Layout
