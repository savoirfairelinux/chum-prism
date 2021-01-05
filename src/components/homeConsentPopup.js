import React from "react"
import { Link } from "gatsby"

import CookieConsent from "react-cookie-consent";

/* Translation using lingui */
import { I18nProvider } from "@lingui/react"
import catalogEn from "../locales/en/messages"
import catalogFr from "../locales/fr/messages"
import { Trans } from "@lingui/macro"

const HomeConsentPopup = () => {
    

    return (
        <CookieConsent
            location="bottom"
            buttonText="I accept/ J'accepte"
            declineButtonText="I decline/ Je refuse"
            cookieName="consentGuiven"
            style={{ background: "#e0e2e5", color: "#323232", fontWeight: "500" }}
            buttonStyle={{ background: "#ffffff", color: "#323232", fontSize: "13px", width: "10rem" }}
            declineButtonStyle={{background: "#323232", color: "#ffffff", fontSize: "13px", width: "10rem" }}
            expires={150}
            onAccept={() => {
                window._paq.push(['setConsentGiven']);
            }}
            enableDeclineButton
        >
            We use cookies to collect information about the use of this Website to help us evaluate and improve this new Referral Service. To learn more, read our <Link 
                to="/privacy-policy"
                onClick={() => {
                    localStorage.setItem("language", "en")
                }}
                >privacy policy</Link>.<br/><br/>
            Nous utilisons des cookies pour collecter des informations concernant l’utilisation de ce site web et ainsi nous aider à évaluer et à améliorer ce nouveau service de référence. Pour en connaître davantage, consultez notre {" "}
            <Link 
                to="/privacy-policy"
                onClick={() => {
                    localStorage.setItem("language", "fr")
                  }}
            >politique de confidentialité</Link>.
        </CookieConsent>
    )
}

export default HomeConsentPopup
