import React from "react"

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const url = window.location.pathname
  console.log(props.indexLogo)
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
      <Sidebar url={url} />
    </div>
  )
}

export default Layout
