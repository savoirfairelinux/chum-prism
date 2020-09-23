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
  const [language, setLanguage] = React.useState(props.language)

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
          <p>
            <Trans id="msg.sidebar_other_resources">
              Here are other resources that could help:
            </Trans>
          </p>
          <div className={layoutStyles.mainNavList}>
            <ul className={layoutStyles.navList}>
              <li className={layoutStyles.navItem}>
                <Trans id="msg.sidebar_kids_help_phone">Kids Help Phone</Trans>
              </li>
              <li className={layoutStyles.navItem}>Tel-jeunes</li>
              <li className={layoutStyles.navItem}>
                <Trans id="msg.sidebar_first_nation">
                  First Nations and Inuit Hope for Wellness Help Line
                </Trans>
              </li>
              <li className={layoutStyles.navItem}>
                <Trans id="msg.sidebar_LGBTQIA2SP">
                  Interligne (for the LGBTQIA2SP+ community)
                </Trans>
              </li>
              <li className={layoutStyles.navItem}>
                <Trans id="msg.sidebar_call">Call</Trans>
                <ul className={layoutStyles.navList}>
                  <li className={layoutStyles.navItem}>Info-Santé (8-1-1)</li>
                  <li className={layoutStyles.navItem}>
                    <Trans id="msg.sidebar_chatham">
                      The Chatham Kent Mental Health Crisis Line (519-436-6100
                      or 1-866-299-7447)
                    </Trans>
                  </li>
                  <li className={layoutStyles.navItem}>
                    <Trans id="msg.sidebar_WAYS">
                      The WAYS’ Crisis Line (519-354-4095)
                    </Trans>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={layoutStyles.prismSymbolContainer}>
            <Link
              to="/resources"
              state={{ returnPath: url, language: language }}
            >
              <img
                src={"/prism_symbol.png"}
                alt="Prism symbol"
                className={layoutStyles.prismSymbol}
              />
              <p>
                <Trans id="msg.sidebar_more_information">
                  Click here for more information on these resources
                </Trans>
              </p>
            </Link>
          </div>
        </nav>
      </div>
    </I18nProvider>
  )
}

export default Sidebar
