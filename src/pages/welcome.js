import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"

/* Translation using lingui */
import { I18nProvider } from "@lingui/react"
import catalogEn from "../locales/en/messages"
import catalogFr from "../locales/fr/messages"
import { Trans } from "@lingui/macro"

const IndexPage = ({ location }) => {
  const [language, setLanguage] = useState("en")


  useEffect(() => {
    if (localStorage.getItem("language") !== "") {
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
      <Layout index={false}>
        <div className={layoutStyles.welcomeFirstBlock}>
          <h1>
            <Trans id="msg.header">
              Welcome to the PRISM-ACCESS Open Minds online referral service!
            </Trans>
          </h1>
          <p>
            <Trans id="msg.welcome_p1">
              Through this website, you can access a referral form to get help
              directly from a youth mental health worker in your community, for
              yourself or a young person you care about.
            </Trans>
          </p>
          <p>
            <Trans id="msg.welcome_p1_note">
              *Please note that this is a new referral service that is only
              available to youth 11 to 25 years old in Canada living in Downtown
              Montreal, Quebec (for youth in homeless situations) and Chatham
              Kent, Ontario...
            </Trans>
          </p>

          <h2>
            <Trans id="msg.welcome_not_emergency">
              This is not an emergency service.
            </Trans>
          </h2>
        </div>
        <div className={layoutStyles.welcomeSecondBlock}>
          <h1>
            <Trans id="msg.welcome_how">How does it work???</Trans>
          </h1>
          <div className={layoutStyles.row}>
            <div className={layoutStyles.column}>
              <img
                src={"/listarrow.png"}
                alt="Yellow arrow"
                className={layoutStyles.listArrow}
              />
              <p className={layoutStyles.right}>
                <strong className={layoutStyles.step}>
                  <Trans id="msg.welcome_step1">Step 1:</Trans>{" "}
                </strong>
                <Trans id="msg.welcome_step1_text">
                  You’ll be asked for some basic information about yourself.
                  There are no right or wrong answers. You can skip questions by
                  clicking “next” or change your information by clicking “back.”
                </Trans>
              </p>
            </div>
            <div className={layoutStyles.column}>
              <img
                src={"/listarrow.png"}
                alt="Yellow arrow"
                className={layoutStyles.listArrow}
              />
              <p>
                <strong className={layoutStyles.step}>
                  <Trans id="msg.welcome_step2">Step 2:</Trans>{" "}
                </strong>{" "}
                <Trans id="msg.welcome_step2_text">
                  Once you have completed the form, your referral will be sent
                  to a youth mental health worker in your community. They will
                  contact you within three days, using the method of your choice
                  (e.g., text, phone, email).
                </Trans>
              </p>
            </div>
          </div>
        </div>

        <div className={layoutStyles.schemaImages}>
          {language === "fr" ? <img
            src={"/welcome_illustration_web_fr.png"}
            alt="Weclome illustration web"
            className={layoutStyles.schemaImageWeb}
          /> : <img
            src={"/welcome_illustration_web.png"}
            alt="Weclome illustration web"
            className={layoutStyles.schemaImageWeb}
          />}
          {language === "fr" ? <img
            src={"/welcome_illustration_mobile_fr.png"}
            alt="Welcome illustration mobile"
            className={layoutStyles.schemaImageMobile}
          />
            : <img
              src={"/welcome_illustration_mobile.png"}
              alt="Welcome illustration mobile"
              className={layoutStyles.schemaImageMobile}
            />
          }
        </div>

        <div className={layoutStyles.welcome}>
          <Link to="/term-of-use">
            <button>
              <Trans id="msg.continue">Continue</Trans>
            </button>
          </Link>
        </div>
      </Layout>
    </I18nProvider>
  )
}

export default IndexPage
