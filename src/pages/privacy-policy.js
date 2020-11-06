import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"

/* Translation using lingui */
import { I18nProvider } from "@lingui/react"
import catalogEn from "../locales/en/messages"
import catalogFr from "../locales/fr/messages"
import { Trans } from "@lingui/macro"

const PrivacyPolicyPage = ({ location }) => {
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
        <div className={layoutStyles.privacyPolicy}>
          <h1>
            <Trans id="msg.privacy_policy_aom">PRISM-AOM</Trans>
          </h1>
          <p>
            <Trans id="msg.privacy_policy_p1">
              This new referral service has been created with members of ACCESS
              Open Minds/Esprits Ouverts. ACCESS Open Minds/Esprits Ouverts is a
              project improving mental health services for youth across Canada.
              Youth and family partners, Canadian technology companies, mental
              health researchers, and service providers have given input on this
              form.
            </Trans>
          </p>
          <p>
            <Trans id="msg.privacy_policy_link1">
              For more information about ACCESS Open Minds, visit:
            </Trans>{" "}
            <a href={language === "fr" ? "https://accessopenminds.ca/fr" : "https://accessopenminds.ca/"} target="_blank">
            {language === "fr" ? "https://accessopenminds.ca/fr" : "https://accessopenminds.ca/"}
            </a>
          </p>
          <p>
            <Trans id="msg.privacy_policy_link2">
              For more information about PRISM-ACCESS Open Minds, visit:
            </Trans>{" "}
            <a href={language === "fr" ? "https://www.smjtechno.com" : "https://www.ymhtech.com"} target="_blank">{language === "fr" ? "https://www.smjtechno.com" : "https://www.ymhtech.com"}</a>
          </p>

          <h1>
            <Trans id="msg.privacy_policy">PRIVACY POLICY</Trans>
          </h1>
          <p>
            <Trans id="msg.privacy_policy_p2">
              Information without your name will be used to evaluate and improve
              this referral service. Examples of this information include: how
              many people used the form, their average age, the types of
              concerns they had, and how many people tried to complete the form
              before leaving.
            </Trans>
          </p>
          <p>
            <Trans id="msg.privacy_policy_p3">
              We care about your privacy. However, for your safety and for
              others, the youth mental health team may have to, by law, share
              some information with a person in authority (like Youth
              Protection, Emergency Services, or a parent/guardian). This may
              apply in the following situations:
            </Trans>
          </p>
          <ul>
            <li>
              <Trans id="msg.privacy_policy_under_17">
                If you are under 17 and have reported physical or sexual abuse;
              </Trans>
            </li>
            <li>
              <Trans id="msg.privacy_policy_harming_yourself">
                If you are seriously thinking about harming yourself or someone
                else.
              </Trans>
            </li>
          </ul>
          <p>
            <Trans id="msg.privacy_policy_under_14">
              Also, if you are under 14, the youth mental health team will need
              to contact your parent(s)/guardian(s) (except in rare situations).
            </Trans>{" "}
          </p>
          <h2>
            <Trans id="msg.privacy_policy_return">
              Click the button below to return to the Terms of Use.
            </Trans>
          </h2>
          <Link to="/term-of-use">
            <button>
              <Trans id="msg.back">BACK</Trans>
            </button>
          </Link>
        </div>
      </Layout>
    </I18nProvider>
  )
}

export default PrivacyPolicyPage
