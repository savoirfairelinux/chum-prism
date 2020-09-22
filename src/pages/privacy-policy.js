import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"

const PrivacyPolicyPage = () => {
  return (
    <Layout index={false}>
      <div className={layoutStyles.forms}>
        <h1>PRISM AOM</h1>
        <p>
          This new referral service has been created with members of ACCESS Open
          Minds/Esprits Ouverts. ACCESS Open Minds/Esprits Ouverts is a project
          improving mental health services for youth across Canada. Youth and
          family partners, Canadian technology companies, mental health
          researchers, and service providers have given input on this form. For
          more information about ACCESS Open Minds, visit
          https://accessopenminds.ca/ For more information about PRISM-ACCESS
          Open Minds, visit https://www.ymhtech.com
        </p>

        <h3>PRIVACY POLICY</h3>
        <p>
          Information without your name will be used to evaluate and improve
          this referral service. Examples of this information include: how many
          people used the form, their average age, the types of concerns they
          had, and how many people tried to complete the form before leaving.
        </p>
        <p>
          We care about your privacy. However, for your safety and for others,
          the youth mental health team may have to, by law, share some
          information with a person in authority (like Youth Protection,
          Emergency Services, or a parent/guardian). This may apply in the
          following situations:
        </p>
        <ul>
          <li>
            If you are under 17 and have reported physical or sexual abuse;
          </li>
          <li>
            If you are seriously thinking about harming yourself or someone
            else.
          </li>
        </ul>
        <p>
          Also, if you are under 14, the youth mental health team will need to
          contact your parent(s)/guardian(s) (except in rare situations).{" "}
        </p>
        <h2>Click the button below to return to the Terms of Use.</h2>
        <Link to="/term-of-use">
          <button>BACK</button>
        </Link>
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage
