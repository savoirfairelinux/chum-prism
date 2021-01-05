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
            <Trans id="msg.privacy_policy_aom">PRISM-AOM Privacy Policy</Trans>
          </h1>
          <p className={layoutStyles.centered}>
            <Trans id="msg.privacy_policy_aom_update_date">Last updated: January 4, 2021</Trans>
          </p>
          <h2>
            <Trans id="msg.who_are_we">Who are we?</Trans>
          </h2>
          <p>
            <Trans id="msg.privacy_policy_p1">
                This Website and Referral Service is managed by the Youth Mental Health and Technology Lab of the University of Montreal Hospital Research Centre in Montreal, Canada (a not-for-profit, public healthcare institution). Our team has developed this new referral service in collaboration with the ACCESS Open Minds national network of youth mental health services. Youth and family partners, Canadian technology companies, mental health researchers, and service providers have given input on the development of this new service, which is now being pilot tested.
            </Trans>
          </p>
          <p>
            <Trans id="msg.privacy_policy_link2">
                For more information about the Youth Mental Health and Technology Lab and the PRISM-AOM project, visit
            </Trans>{" "}
            <a href={language === "fr" ? "https://www.smjtechno.com" : "https://www.ymhtech.com"} target="_blank">{language === "fr" ? "https://www.smjtechno.com" : "https://www.ymhtech.com"}</a>
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
            <Trans id="msg.privacy_policy_p1_1">
            We are committed to protecting your privacy. This page describes our Privacy Policy, including the information we collect from users of this Website and Referral Service, why we collect this information, and how we use that information. By using this Website and the Referral Service, you signify your acceptance of the collection and use of information in accordance with this Privacy Policy.
            </Trans>
          </p>
          <h2>
            <Trans id="msg.why_do_we_collect_information">Why do we collect information?</Trans>
          </h2>
          <p>
            <Trans id="msg.privacy_policy_p2">
            We collect information for the sole purpose of providing and improving this Website and Referral Service, and to evaluate it as part of a research project to improve access to mental health services for youth. The evaluation of this online Referral Service project has received central ethics approval from the University of Montreal Hospital Research Centre’s Ethics Review Board.
            </Trans>
          </p>
          <p>
            <Trans id="msg.privacy_policy_p3">
            We do not disclose, sell, trade, or otherwise transfer your personal information to third-party organizations that are not directly involved in this project.
            </Trans>
          </p>
          <h2>
            <Trans id="msg.when_do_we_collect_information">When do we collect information?</Trans>
          </h2>
          <p>
            <Trans id="msg.privacy_policy_p4">
            Les informations sont collectées lorsque vous visitez le site web ou lorsque vous complétez une demande pour des services de santé mentale en utilisant notre formulaire de référence.
            </Trans>
          </p>
          <h2>
            <Trans id="msg.what_information_do_we_collect_and_why">What information do we collect and why? </Trans>
          </h2>
          <p>
            <Trans id="msg.privacy_policy_p5">
            We collect personal information that you submit in our referral form (e.g., name, contact information, reason for referral) when you make a request for mental health services. This information is then accessed by a youth mental health team located in your community that is participating in this new Referral Service. This information is necessary for the youth mental health team to be able to contact you and to respond to your request for services. Contact information may also be used to provide you with information and updates regarding your referral. The youth mental health teams that we work with are part of the public health care sector, which means they provide their services for free.
            </Trans>
          </p>
          <p>
            <Trans id="msg.privacy_policy_p6_before">
            Information </Trans> <strong><Trans id="msg.privacy_policy_p6_bold">without your name and without identifying information</Trans></strong> <Trans id="msg.privacy_policy_p6_after">will also be used to evaluate and improve this Referral Service. Examples of this information include: how many people used the form, their average age, and the types of concerns they had.</Trans>
          </p>
          <p>
          <strong><Trans id="msg.privacy_policy_p7_title">Statistical and Cookie Information:</Trans></strong> <Trans id="msg.privacy_policy_p7">Anonymous statistical information about the way visitors and users interact with this Website, in the form of website traffic analytics (i.e., Matamo Analytics) will also be collected. The analytics engine passively gathers visitor and user information, including your IP address (anonymized to 2 bytes); the type of device, operating system, and browser you use; and your activity on our website (e.g., the pages of our Website that you visit, the time and date of your visit, the time spent on those pages).</Trans>
          </p>
          <p>
            <Trans id="msg.privacy_policy_p8">
            This information helps us to improve our Website and Referral Service.
            </Trans>
          </p>
          <p>
            <Trans id="msg.privacy_policy_p9">
            Like many sites, we use "cookies" to collect information. We use cookies to help recognize you as a repeat visitor, to save your preferences for future visits to our website, and to compile aggregate statistical data about the use of this Website to help us improve it.
            </Trans>
          </p>
          <p>
            <Trans id="msg.privacy_policy_p10">
            You can choose to accept the cookies by clicking Agree in the banner located at the bottom of the website, or you can click Decline and continue to navigate the website without being tracked. You also have the option of deleting the cookies via your internet browser after you have visited this website.
            </Trans>
          </p>
          <h2>
            <Trans id="msg.how_do_we_protect_your_information">How do we protect your information?</Trans>
          </h2>
          <p>
            <Trans id="msg.privacy_policy_p11">
            The security of your Personal Information is important to us. We have adopted appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information provided through this Referral Service. We use an SSL secured communication channel and encryption when sensitive and private data is being exchanged between our Referral Service and its Users. Also, all information pertaining to the use of this Website and Referral Service are maintained and stored securely in Canada. This information is contained behind secured networks and accessible only by those who have special access rights and are required to keep the information confidential. But remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure.
            </Trans>
          </p>
          <p>
            <Trans id="msg.privacy_policy_p12">
            In rare circumstances, for your safety and for others, the youth mental health team may have to, by law, share some information with a person in authority (like Youth Protection, Emergency Services, or a parent/guardian). This may apply in the following situations:
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
            <Trans id="msg.will_this_privacy_policy_change">
                Will this Privacy Policy change?
            </Trans>
          </h2>
          <p>
            <Trans id="msg.privacy_policy_under_15">
            This Privacy Policy is effective as of January 4, 2021. Any changes to this Privacy Policy  will be posted to the website as soon as they go into effect, and the new date will be revised in this section.
            </Trans>
          </p>
          <h2>
            <Trans id="msg.who_can_i_contact_if_i_want_more_information_about_this_privacy_policy">
            Who can I contact if I want more information about this Privacy Policy?
            </Trans>
          </h2>
          <p>
            <Trans id="msg.privacy_policy_under_16">
            If you have any questions about this Privacy Policy or about this new Referral Service that we are in the process of evaluating, please contact us at:
            </Trans>{" "}
            <strong><a href="mailto:info@aom.prismref.ca">info@aom.prismref.ca</a></strong>
          </p>
          <h2>
            <Trans id="msg.privacy_policy_return_button">
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