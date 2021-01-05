import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"

/* Translation using lingui */
import { I18nProvider } from "@lingui/react"
import catalogEn from "../locales/en/messages"
import catalogFr from "../locales/fr/messages"
import { Trans } from "@lingui/macro"

const IndexPage = ({ location }) => {
  const [valide, setValide] = React.useState(false)
  const [clicked, setClicked] = React.useState(false)

  const [language, setLanguage] = React.useState("en")

  React.useEffect(() => {
    if (localStorage.getItem("language") !== "") {
      setLanguage(localStorage.getItem("language"))
    }
  }, [])

  const changeState = () => {
    if (valide) setValide(false)
    else setValide(true)
  }

  return (
    <I18nProvider
      language={language}
      catalogs={{
        en: catalogEn,
        fr: catalogFr,
      }}
    >
      <Layout index={false} language={language}>
        <div className={layoutStyles.termOfUse}>
          <h1>
            <Trans id="msg.term_of_use">Terms of Use</Trans>
          </h1>
          <h2>
            <Trans id="msg.term_of_use_before">
              Before you use this referral form, please read the text below.
            </Trans>
          </h2>
          <p>
            <Trans id="msg.term_of_use_by_using">
              By using this form, you agree to these statements:
            </Trans>
          </p>
          <ul>
            <li>
              <strong className={layoutStyles.blueStrong}>
                <Trans id="msg.term_of_use_not_emergency">
                  PRISM-AOM is not an emergency service.
                </Trans>
              </strong>{" "}
              <Trans id="msg.term_of_use_if_crisis">
                If you are in a crisis, please call 9-1-1 or contact one of the
                services listed on the right side of this page.
              </Trans>
            </li>
            <li>
              <Trans id="msg.term_of_use_wrongly">
                You will not use the form wrongly (e.g., spamming or writing
                false information).
              </Trans>
            </li>
            <li>
              <Trans id="msg.term_of_use_hate">
                You will not use the form to spread any hate speech (i.e.,
                speech that is intended to insult, offend, or bully a person).
              </Trans>
            </li>
            <li>
              <Trans id="msg.term_of_use_information_name">
                Information without your name will be used to evaluate and
                improve this referral service.
              </Trans>{" "}
              <Trans id="msg.term_of_use_click">Click</Trans>{" "}
              <Link to="/privacy-policy"
                    state={{
                        paramLanguage: language,
                    }} 
                    
                    className={layoutStyles.blueStrong}
              >
                <Trans id="msg.term_of_use_here">HERE</Trans>
              </Link>{" "}
              <Trans id="msg.term_of_use_know_more">
                if you would like to know more about the PRISM-AOM project and
                our Privacy Policy.
              </Trans>
            </li>
            <li>
              <Trans id="msg.term_of_use_under_14">
                If you are under 14, the youth mental health team will need to
                contact your parent(s)/guardian(s) (except in rare situations).
              </Trans>
            </li>
          </ul>
          <div className={layoutStyles.termOfUseForm}>
            <label className={layoutStyles.toggle}>
              <input
                className={layoutStyles.toggle__input}
                type="checkbox"
                onClick={() => {
                  changeState()
                }}
              />
              <span className={layoutStyles.toggle__label}>
                <span className={layoutStyles.toggle__text}>
                  <Trans id="msg.term_of_use_agree_terms">
                      I have read, understood, and agree to these Terms of Use.
                  </Trans>
                </span>
              </span>
            </label>
          </div>
        </div>

        <div className={layoutStyles.welcome}>
          {valide ? (
            <Link to="/forms">
              <button>
                <Trans id="msg.continue">Continue</Trans>
              </button>
            </Link>
          ) : (
            <button onClick={()=>setClicked(true)}>
              <Trans id="msg.continue">Continue</Trans>
            </button>
          )}
        </div>

        {!valide && clicked &&<div className={layoutStyles.modal}>
          <div className={layoutStyles.modalContent}>
            <span className={layoutStyles.modalContentClose} onClick={()=>setClicked(false)}>&times;</span>
            <p><Trans id="msg.popup_terms">Please click the box below to indicate that you have read, understand, and agree to these Terms of Use before you can continue.</Trans></p>
          </div>
        </div>}
      </Layout>
    </I18nProvider>
  )
}

export default IndexPage
