import React from "react"

import MainLayout from "../components/mainLayout"
import layoutStyles from "../components/layout.module.scss"

/* Translation using lingui */
import { I18nProvider } from "@lingui/react"
import catalogEn from "../locales/en/messages"
import catalogFr from "../locales/fr/messages"
import { Trans } from "@lingui/macro"
import { Link } from "gatsby"

const IndexPage = ({ location }) => {
  const [language, setLanguage] = React.useState("en")

  React.useEffect(() => {
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
      <MainLayout index={false} language={language}>
        <div className={layoutStyles.termOfUse}>
          <h2 style={{ textAlign: "center"}}>
            <Trans id="msg.pathway_for_rapid">
            Pathway for Rapid, Internet-based, Self-referral to Mental health services for youth
            </Trans>
          </h2>

          <h1 style={{ textAlign: "center"}}>
            <Trans id="msg.about_the_prism_access_open_minds_project">ABOUT THE PRISM-ACCESS OPEN MINDS PROJECT</Trans>
          </h1>
          <h3 className={layoutStyles.blueStrong}>
            <Trans id="msg.project_summary">Project Summary</Trans>
          </h3>
          <p>
            <Trans id="msg.main_page_p1">
            PRISM-ACCESS Open Minds is a services research project conducted in collaboration with the ACCESS Open Minds pan-Canadian network for youth mental health service transformation, community organizations (e.g., Kids Help Phone, mindyourmind), and Canadian-based health technology companies.
            </Trans>
          </p>
          <p>
            <Trans id="msg.main_page_p2">
            PRISM-AOM aims to develop, implement, and evaluate the use of an online self-referral pathway to facilitate rapid and direct access to mental health services for youth.
            </Trans>
          </p>
          <p>
            <Trans id="msg.main_page_p3">
            Through this pathway, youth with mental health concerns will be able to connect with, and refer themselves directly to a local team specializing in youth mental health care using their phone, computer, or tablet. Parents and service providers will also be able to refer a young person to mental health services via PRISM-AOM. Clinicians will be able to triage, track, and manage referrals through a secured platform.
            </Trans>
          </p>
          <p>
            <strong className={layoutStyles.blueStrongThin}><Trans id="msg.main_page_p4_intro">PRISM-AOM is not an emergency service.</Trans></strong>
            {" "}
            <Trans id="msg.main_page_p4">
            If you are in a crisis, please call 9-1-1 or contact one of the services listed on the right side of this page.
            </Trans>
          </p>
          <p>
            <Trans id="msg.main_page_p5">
            Key partners include: ACCESS Open Minds, Strata Health Solutions, Youth and Family representatives, Tickit Health, Savoir-faire Linux, Kids Help Phone, Wisdom2Action, and mindyourmind.
            </Trans>
          </p>
          <h3 className={layoutStyles.blueStrong}>
            <Trans id="msg.project_updates">Project Updates</Trans>
          </h3>
          <p>
            <Trans id="msg.main_page_p6">
            The project has gone live! Click the link below if you would like to access the referral form.
            </Trans>
          </p>
          <p>
            <Trans id="msg.main_page_p7">
            *Please note that this is a new referral service that is being piloted for youth 11 to 25 years old in Canada living in Downtown Montreal, Quebec (for youth in homeless situations) and Chatham Kent, Ontario.
            </Trans>
          </p>
          <p>
            <Trans id="msg.click">Click</Trans> <Link to="/privacy-policy" className={layoutStyles.blueStrong}><Trans id="msg.here">HERE</Trans></Link> <Trans id="msg.main_page_p8">if you would like to know more about the PRISM-AOM project and our Privacy Policy.</Trans>
          </p>
        </div>

        <div className={layoutStyles.welcome}>
            <a href="https://aom.prismref.ca" target="_blank">
              <button className={layoutStyles.mainButton}>
                <Trans id="msg.click_here_for_the_form">CLICK HERE FOR THE FORM</Trans>
              </button>
            </a>
        </div>
      </MainLayout>
    </I18nProvider>
  )
}

export default IndexPage
