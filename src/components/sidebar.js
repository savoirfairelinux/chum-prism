import React, { Component } from "react"
import { Link } from "gatsby"

import layoutStyles from "./layout.module.scss"

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"

class HeadeSidebarToggleButton extends Component {
  toogleSideBar = () => {
    console.log(document.getElementById("content"))
    if (document.getElementById("content").className.includes("full")) {
      document.getElementById("content").className = layoutStyles.content
      document.getElementById("sidebar").className = layoutStyles.sidebar
    } else {
      document.getElementById("content").className = layoutStyles.fullContent
      document.getElementById("sidebar").className = layoutStyles.fullSidebar
    }
  }

  render() {
    return (
      <i className="material-icons" onClick={this.toogleSideBar}>
        help
      </i>
    )
  }
}

const Sidebar = () => {
  return (
    <div id="sidebar" className={layoutStyles.sidebar}>
      <MobileView>
        <div className={layoutStyles.sidebarHeader}>
          <HeadeSidebarToggleButton />
        </div>
      </MobileView>
      <nav className={layoutStyles.sidebarMainWeb}>
        <h1>
          <i>PRISM-AOM IS NOT AN EMERGENCY SERVICE.</i>
        </h1>
        <h2>If there is an urgent situation, please call:</h2>
        <h3>
          <i className="material-icons">phone</i> 9-1-1
        </h3>
        <p>Here are other resources that could help:</p>
        <div className={layoutStyles.mainNavList}>
          <ul className={layoutStyles.navList}>
            <li className={layoutStyles.navItem}>Kids Help Phone</li>
            <li className={layoutStyles.navItem}>Tel-jeunes</li>
            <li className={layoutStyles.navItem}>
              First Nations and Inuit Hope for Wellness Help Line
            </li>
            <li className={layoutStyles.navItem}>
              Interligne (for the LGBTQIA2SP+ community)
            </li>
            <li className={layoutStyles.navItem}>
              Call
              <ul className={layoutStyles.navList}>
                <li className={layoutStyles.navItem}>Info-Santé (8-1-1)</li>
                <li className={layoutStyles.navItem}>
                  The Chatham Kent Mental Health Crisis Line (519-436-6100 or
                  1-866-299-7447)
                </li>
                <li className={layoutStyles.navItem}>
                  The WAYS’ Crisis Line (519-354-4095)
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={layoutStyles.prismSymbolContainer}>
          <img
            src={"/prism_symbol.png"}
            alt="Prism symbol"
            className={layoutStyles.prismSymbol}
          />
          <Link to="/resources">
            <p>Click here for more information on these resources </p>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
