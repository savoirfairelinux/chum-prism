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
          <div className={layoutStyles.formsButtonSection}>
            <a href="https://www.tickitforhealth.com/app/hqj?identifier= " target="_blank">
              <button className={layoutStyles.formsButton}>
                <p><Trans id="msg.forms_yourself">YOURSELF</Trans></p>
                <img
                  src="/oneperson.png"
                  alt="One person"
                  className={layoutStyles.image1}
                />
              </button>
            </a>
            <a href="https://www.tickitforhealth.com/app/lea?identifier= " target="_blank">
              <button className={layoutStyles.formsButton}>
                <p><Trans id="msg.forms_seomeone_else">SOMEONE ELSE</Trans></p>
                <img
                  src="/twopersons.png"
                  alt="Two person"
                  className={layoutStyles.image2}
                />
              </button>
            </a>
          </div>
          <div className={layoutStyles.classicParagraphDiv}>
            <p className={layoutStyles.classicParagraph}><Trans id="msg.technical_issues">For any technical issues accessing or completing the referral form, please contact:</Trans> <strong><a href="mailto:support@tickithealth.com">support@tickithealth.com</a></strong></p>
            <p className={layoutStyles.classicParagraph}><Trans id="msg.general_informations">For any general information about this new referral service, please contact:</Trans> <strong><a href="mailto:info@aom.prismref.ca">info@aom.prismref.ca</a></strong></p>
          </div>
        </div>
      </Layout>
    </I18nProvider>
  )
}

export default IndexPage
