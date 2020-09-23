import React from "react"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"

/* Translation using lingui */
import { I18nProvider } from "@lingui/react"
import catalogEn from "../locales/en/messages"
import catalogFr from "../locales/fr/messages"
import { Trans } from "@lingui/macro"

const IndexPage = ({ location }) => {
  const [language, setLanguage] = React.useState("en")

  React.useEffect(() => {
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
      <Layout index={false} language={language}>
        <div className={layoutStyles.forms}>
          <h1>
            <Trans id="msg.forms_choose_button">
              Please choose one of the buttons to enter the
            </Trans>{" "}
            <span className={layoutStyles.redColor}>
              <Trans id="msg.forms_referral_form">
                PRISM-AOM online referral form!
              </Trans>
            </span>
          </h1>
          <h2>
            <Trans id="msg.forms_filling_for">
              Click if you are filling out this form for….
            </Trans>
          </h2>
          <a href="http://www.ymhtech.com/welcome">
            <button>
              <Trans id="msg.forms_yourself">YOURSELF</Trans>
              <br />
              <br />
              <img
                src="/oneperson.png"
                alt="One person"
                className={layoutStyles.formIcon}
              />
            </button>
          </a>
          <a href="http://www.ymhtech.com/welcome">
            <button>
              <Trans id="msg.forms_seomeone_else">SOMEONE ELSE</Trans>
              <br />
              <br />
              <img
                src="/twopersons.png"
                alt="Two person"
                className={layoutStyles.formIcon}
              />
            </button>
          </a>
        </div>
      </Layout>
    </I18nProvider>
  )
}

export default IndexPage
