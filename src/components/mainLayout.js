import React from "react"

import MainHeader from "./mainHeader"
import MainFooter from "./mainFooter"
import Sidebar from "./sidebar"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import ConsentPopup from "./consentPopup"

const MainLayout = props => {
  return (
    <div className={layoutStyles.container}>
      <div
        id="content"
        className={layoutStyles.content}
      >
        <MainHeader />
        <div className={layoutStyles.main}>{props.children}</div>
        <MainFooter />
      </div>
      <Sidebar />
      <ConsentPopup/>
    </div>
  )
}

export default MainLayout
