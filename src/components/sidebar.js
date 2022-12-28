import React, { Component } from "react"
import { Link } from "gatsby"

import layoutStyles from "./layout.module.scss"

/* Translation using lingui */
import { I18nProvider } from "@lingui/react"
import catalogEn from "../locales/en/messages"
import catalogFr from "../locales/fr/messages"
import { Trans } from "@lingui/macro"

const Sidebar = props => {
  const [url, setUrl] = React.useState("")
  const [language, setLanguage] = React.useState("en")

  React.useEffect(() => {
    setUrl(window.location.pathname)

    if (localStorage.getItem("language") != "") {
      setLanguage(localStorage.getItem("language"))
    }
  }, [])
  return (
    <I18nProvider
      language={language}
      catalogs={{
        en: catalogEn,
        fr: catalogFr,
      }}
    >
      <div id="sidebar" className={layoutStyles.sidebar}>
        <div className={layoutStyles.sidebarHeader}>
          <Link to="/resources" state={{ returnPath: url }}>
            <img src={"/prism_symbol.png"} alt="Prism symbol" />
            <p className={layoutStyles.mobileHeaderText}><Trans id="msg.here_are_other_ressources">Here are other resources that could help</Trans></p>
          </Link>
        </div>
        <nav className={layoutStyles.sidebarMainWeb}>
          <h1>
            <i>
              <Trans id="msg.resource_header">
                PRISM-AOM IS NOT AN EMERGENCY SERVICE.
              </Trans>
            </i>
          </h1>
          <h2>
            <Trans id="msg.sidebar_urgent">
              If there is an urgent situation, please call:
            </Trans>
          </h2>
          <h3>
            <a href="tel:911">
              <i className="material-icons">phone</i> 9-1-1
            </a>
          </h3>
          <div className={layoutStyles.prismSymbolContainer}>
            <Link
              to="/resources"
              state={{ returnPath: url, language: language }}
            >
              <p>
                <Trans id="msg.sidebar_more_information">
                  Click the logo for more information on the resources listed below
                </Trans>
              </p>
              <img
                src={"/prism_symbol.png"}
                alt="Prism symbol"
                className={layoutStyles.prismSymbol}
              />
            </Link>
          </div>
          <div className={layoutStyles.mainNavList}>
            
              <p><a href={language === "fr" ? "http://www.jeunessejecoute.ca/" : "http://www.kidshelpphone.ca"} target="_blank"><Trans id="msg.sidebar_kids_help_phone">Kids Help Phone</Trans></a></p>
              <p><a href={language === "fr" ? "https://www.teljeunes.com" : "https://www.teljeunes.com/Tel-jeunes-en"} target="_blank">Tel-jeunes</a></p>
              <p>
                <a href={language === "fr" ? "https://www.espoirpourlemieuxetre.ca/" : "https://www.hopeforwellness.ca"} target="_blank">
                  <Trans id="msg.sidebar_first_nation">
                    First Nations and Inuit Hope for Wellness Help Line
                  </Trans>
                </a>
              </p>
              <p>
                <a href={language === "fr" ? "https://www.interligne.co/" : "https://www.interligne.co/en"} target="_blank">
                  <Trans id="msg.sidebar_LGBTQIA2SP">
                    Interligne (for the LGBTQIA2SP+ community)
                  </Trans>
                </a>
              </p>

              <p className={layoutStyles.left}><Trans id="msg.sidebar_call">Call</Trans></p>
              <ul className={layoutStyles.navList}>
                <li className={layoutStyles.navItem}>Info-Santé (8-1-1)</li>
              </ul>
          </div>
        </nav>
      </div>
    </I18nProvider>
  )
}

export default Sidebar
