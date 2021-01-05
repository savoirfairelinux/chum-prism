import React from "react"
import { Link } from "gatsby"

import CookieConsent from "react-cookie-consent";

/* Translation using lingui */
import { I18nProvider } from "@lingui/react"
import catalogEn from "../locales/en/messages"
import catalogFr from "../locales/fr/messages"
import { Trans } from "@lingui/macro"

const ConsentPopup = () => {
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
        <CookieConsent
            location="bottom"
            buttonText={<Trans id="msg.tracking_consent_message_accept">Accept</Trans>}
            declineButtonText={<Trans id="msg.tracking_consent_message_decline">Decline</Trans>}
            cookieName="consentGuiven"
            style={{ background: "#e0e2e5", color: "#323232", fontWeight: "500" }}
            buttonStyle={{ background: "#ffffff", color: "#323232", fontSize: "13px", width: "6rem" }}
            declineButtonStyle={{background: "#323232", color: "#ffffff", fontSize: "13px", width: "6rem" }}
            expires={150}
            onAccept={() => {
            window._paq.push(['setConsentGiven']);
            }}
            enableDeclineButton
        >
            <Trans id="msg.tracking_consent_text">We use cookies to collect information about the use of this Website to help us evaluate and improve this new Referral Service. To learn more, read our </Trans> <Link to="/privacy-policy"><Trans id="msg.tracking_consent_text_privacy_policy">privacy policy</Trans></Link>.
        </CookieConsent>
    </I18nProvider>
    )
}

export default ConsentPopup
