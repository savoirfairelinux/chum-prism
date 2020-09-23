import React from "react"

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const ResourcesLayout = props => {
  return (
    <div className={layoutStyles.resourcesContainer}>
      <div id="content" className={layoutStyles.resourcesContent}>
        <div className={layoutStyles.mainResources}>{props.children}</div>
      </div>
    </div>
  )
}

export default ResourcesLayout
