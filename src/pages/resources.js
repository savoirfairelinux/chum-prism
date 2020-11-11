import React from "react"
import { Helmet } from "react-helmet";
import { Link } from "gatsby"

import layoutStyles from "../components/layout.module.scss"

import ResourcesLayout from "../components/resourcesLayout"

/* Translation using lingui */
import { I18nProvider } from "@lingui/react"
import catalogEn from "../locales/en/messages"
import catalogFr from "../locales/fr/messages"
import { Trans } from "@lingui/macro"

const Resources = ({ location }) => {
  const [url, setUrl] = React.useState("/")

  const [language, setLanguage] = React.useState("en")

  React.useEffect(() => {
    if (location.state) setUrl(location.state.returnPath)

    if (localStorage.getItem("language") != "") {
      setLanguage(localStorage.getItem("language"))
    }
  })

  const ontarioContent = () => {
    return(              <div className={layoutStyles.card}>
      <div className={layoutStyles.cardHeader}>
        <div className={layoutStyles.cardTitle}>
          <h1>
            <Trans id="msg.resource_ontario">
              Ontario-Specific Resources:
            </Trans>
          </h1>
        </div>
      </div>
      <div className={layoutStyles.cardBody}>
        <div className={layoutStyles.resourceContainer}>
          <div className={layoutStyles.card}>
            <div className={layoutStyles.cardHeader}>
              <div className={layoutStyles.cardTitle}>
                <h3>
                  <Trans id="msg.resource_canadian_mental_health">
                    The Canadian Mental Health Association’s 24-hour
                    crisis line (for anyone 16+ in Lambton County and
                    Kent County)
                  </Trans>
                </h3>
              </div>
            </div>
            <div className={layoutStyles.cardBody}>
              <div className={layoutStyles.cardText}>
                <ul>
                  <li>
                    <a href="tel:+15194366100">
                      <i className="material-icons">phone</i>{" "}
                      <Trans id="msg.resource_canadian_mental_health_phone_chatman">
                        Chatham Kent Mental Health Crisis Line:
                        519-436-6100 or 1-866-299-7447
                      </Trans>
                    </a>
                  </li>

                  <li>
                    <a href="tel:+15193363445">
                      <i className="material-icons">phone</i>{" "}
                      <Trans id="msg.resource_canadian_mental_health_lambton">
                        Lambton Mental Health Crisis Line:
                        519-336-3445 or 1-800-307-4319
                      </Trans>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={layoutStyles.cardFooter}>
              <div className={layoutStyles.cardImage}>
                <img src="/CMHA.png" alt="CMHA" />
              </div>
            </div>
          </div>
          <div className={layoutStyles.card}>
            <div className={layoutStyles.cardHeader}>
              <div className={layoutStyles.cardTitle}>
                <h3>
                  <Trans id="msg.resource_WAYS">
                    WAYS Mental Health Support Crisis and Community
                    Support Program 24/7 crisis line (for youth 6-18
                    y/o and their parents)
                  </Trans>
                </h3>
              </div>
            </div>
            <div className={layoutStyles.cardBody}>
              <div className={layoutStyles.cardText}>
                <ul>
                  <li>
                    <a href="tel:+15193544095">
                      <i className="material-icons">phone</i>{" "}
                      519-354-4095
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={layoutStyles.cardFooter}>
              <div className={layoutStyles.cardImage}>
                <img src="/WAYS.png" alt="WAYS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }

  const quebecContent = () => {
    return(<div className={layoutStyles.card}>
      <div className={layoutStyles.cardHeader}>
        <div className={layoutStyles.cardTitle}>
          <h1>
            <Trans id="msg.resource_quebec">
              Quebec-Specific Resources:
            </Trans>
          </h1>
        </div>
      </div>
      <div className={layoutStyles.cardBody}>
        <div className={layoutStyles.resourceContainer}>
          <div className={layoutStyles.card}>
            <div className={layoutStyles.cardHeader}>
              <div className={layoutStyles.cardTitle}>
                <h3>
                  <Trans id="msg.resource_quebec_tel_jeune">
                    Contact a counsellor at Tel-jeunes
                  </Trans>
                </h3>
              </div>
            </div>
            <div className={layoutStyles.cardBody}>
              <div className={layoutStyles.cardText}>
                <ul>
                  <li>
                    <a href="tel:+18002632266">
                      <i className="material-icons">phone</i>{" "}
                      1-800-263-2266
                    </a>
                  </li>
                  <li>
                    <a href="sms:+15146001002">
                      <i className="material-icons">chat</i>{" "}
                      514-600-1002
                    </a>
                  </li>
                  <li>
                    <i className="material-icons">language</i>{" "}
                    <a href={language === "fr" ? "https://www.teljeunes.com/" : "https://www.teljeunes.com/Tel-jeunes-en"} target="_blank">
                    <Trans id="msg.resource_quebec_tel_jeune_chat">
                      www.teljeunes.com/Tel-jeunes-en (live chat
                      available)
                    </Trans>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={layoutStyles.cardFooter}>
              <div className={layoutStyles.cardImage}>
                <img src="/teljeunes.png" alt="teljeunes" />
              </div>
            </div>
          </div>
          <div className={layoutStyles.card}>
            <div className={layoutStyles.cardHeader}>
              <div className={layoutStyles.cardTitle}>
                <h3>
                  <Trans id="msg.resource_quebec_nurse">
                    To speak to a nurse or a social worker about a
                    health concern, call Info-Santé
                  </Trans>
                </h3>
              </div>
            </div>
            <div className={layoutStyles.cardBody}>
              <div className={layoutStyles.cardText}>
                <ul>
                  <li>
                    <a href="tel:811">
                      <i className="material-icons">phone</i> 8-1-1
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={layoutStyles.cardFooter}>
              <div className={layoutStyles.cardImage}>
                <img src="/811.png" alt="811" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }

  return (
    <I18nProvider
      language={language}
      catalogs={{
        en: catalogEn,
        fr: catalogFr,
      }}
    >
      <ResourcesLayout>
      <Helmet>
          <style type="text/css">
            
            {`
            body {
              background-color: #175389;
            }
          `}
          </style>
        </Helmet>
        <div className={layoutStyles.mainWrapper}>
          <div className={layoutStyles.mainResourceContainer}>
            <Link to={url}>
              <div>
                <span>
                  <Trans id="msg.resource_exit">QUICK EXIT</Trans>
                </span>
              </div>

              <img
                src={"/prism_symbol.png"}
                alt="Prism symbol"
                className={layoutStyles.prismSymbol}
              />
            </Link>
            <h1>
              <i>
                <Trans id="msg.resource_header">
                  PRISM-AOM IS NOT AN EMERGENCY SERVICE.
                </Trans>
              </i>
            </h1>
            <p>
              <Trans id="msg.resource_urgent_situation">
                If there is an urgent situation (for example, losing control of
                aggressive or suicidal thoughts), please call:
              </Trans>{" "}
            </p>
            <h2>
              <a href="tel:911">
                <i className="material-icons">phone</i> 9-1-1
              </a>
            </h2>
            <h2>
              <Trans id="msg.resource_emergency_department">
                or go to the nearest Emergency Department.
              </Trans>
            </h2>
            <p>
              <Trans id="msg.resource_other_resources">
                Here are other resources that could help (all toll-free, open
                24/7). All of these services are offered in English and French.
              </Trans>
            </p>
          </div>
          <div className={layoutStyles.wrapper}>
            <div className={layoutStyles.resourceContainer}>
              <div className={layoutStyles.card}>
                <div className={layoutStyles.cardHeader}>
                  <div className={layoutStyles.cardTitle}>
                    <h3>
                      <Trans id="msg.resource_kid_help_phone">
                        Contact a counsellor at Kids Help Phone
                      </Trans>
                    </h3>
                  </div>
                </div>
                <div className={layoutStyles.cardBody}>
                  <div className={layoutStyles.cardText}>
                    <ul>
                      <li>
                        <a href="tel:+18006686868">
                          <i className="material-icons">phone</i> 1-800-668-6868
                        </a>
                      </li>
                      <li>
                        <a href="sms:686868">
                          <i className="material-icons">chat</i>{" "}
                          <Trans id="msg.resource_kid_help_phone_chat">
                            Text CONNECT to 686868
                          </Trans>
                        </a>
                      </li>
                      <li>
                        <i className="material-icons">language</i>{" "}
                        <a href={language === "fr" ? "http://www.jeunessejecoute.ca/" : "http://www.kidshelpphone.ca"} target="_blank">
                        <Trans id="msg.resource_kid_help_phone_web">
                          www.kidshelpphone.ca (live chat available)
                        </Trans>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={layoutStyles.cardFooter}>
                  <div className={layoutStyles.cardImage}>
                    <img src="/kidshelphone.png" alt="Kids Help Phone" />
                  </div>
                </div>
              </div>
              <div className={layoutStyles.card}>
                <div className={layoutStyles.cardHeader}>
                  <div className={layoutStyles.cardTitle}>
                    <h3>
                      <Trans id="msg.resource_first_nation">
                        First Nations and Inuit Hope for Wellness Help Line
                      </Trans>
                    </h3>
                  </div>
                </div>
                <div className={layoutStyles.cardBody}>
                  <div className={layoutStyles.cardText}>
                    <ul>
                      <li>
                        <a href="tel:+18552423310">
                          <i className="material-icons">phone</i> 1-855-242-3310
                        </a>
                      </li>
                      <li>
                        <i className="material-icons">language</i>{" "}
                        <a href={language === "fr" ? "https://www.espoirpourlemieuxetre.ca/" : "https://www.hopeforwellness.ca"} target="_blank">
                        <Trans id="msg.resource_first_nation_web">
                          www.hopeforwellness.ca (live chat available)
                        </Trans>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={layoutStyles.cardFooter}>
                  <div className={layoutStyles.cardImage}>
                    <img src="/firstnation.png" alt="First nation" />
                  </div>
                </div>
              </div>
              <div className={layoutStyles.card}>
                <div className={layoutStyles.cardHeader}>
                  <div className={layoutStyles.cardTitle}>
                    <h3>
                      <Trans id="msg.resource_LGBTQIA2SP">
                        Interligne (for the LGBTQIA2SP+ community)
                      </Trans>
                    </h3>
                  </div>
                </div>
                <div className={layoutStyles.cardBody}>
                  <div className={layoutStyles.cardText}>
                    <ul>
                      <li>
                        <a href="tel:+18885051010">
                          <i className="material-icons">phone</i> 1-888-505-1010
                        </a>
                      </li>
                      <li>
                        <i className="material-icons">language</i>{" "}
                        <a href={language === "fr" ? "https://www.interligne.co" : "https://www.interligne.co/en"} target="_blank">
                        <Trans id="msg.resource_LGBTQIA2SP_web">
                          www.interligne.co/en (live chat available)
                        </Trans>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={layoutStyles.cardFooter}>
                  <div className={layoutStyles.cardImage}>
                    <img src="/interligne.png" alt="Inter lign" />
                  </div>
                </div>
              </div>          
              <div className={layoutStyles.card}>
                <div className={layoutStyles.cardHeader}>
                  <div className={layoutStyles.cardTitle}>
                    <h3>
                      <Trans id="msg.resource_find_other">
                        Find another resource near you
                      </Trans>
                    </h3>
                  </div>
                </div>
                <div className={layoutStyles.cardBody}>
                  <div className={layoutStyles.cardText}>
                    <ul>
                      <li>
                        <a href="tel:211">
                          <i className="material-icons">phone</i>{" "}
                          <Trans id="msg.resource_call_211">
                            Call or dial 2-1-1
                          </Trans>
                        </a>
                      </li>
                      <li>
                        <i className="material-icons">language</i>{" "}
                        <a href={language === "fr" ? "https://211.ca/fr" : "https://www.211.ca"} target="_blank">
                        www.211.ca
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={layoutStyles.cardFooter}>
                  <div className={layoutStyles.cardImage}>
                    <img src="/211.png" alt="211" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={layoutStyles.wrapper}>
            <div className={layoutStyles.secondeResourceContainer}>
              {language === "fr" ? quebecContent() : ontarioContent()}
              {language === "en" ? quebecContent() : ontarioContent()}
            </div>
          </div>
        </div>
      </ResourcesLayout>
    </I18nProvider>
  )
}

export default Resources
