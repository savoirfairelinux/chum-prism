import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"

const IndexPage = () => {
  const [valide, setValide] = React.useState(false)

  const changeState = () => {
    if (valide) setValide(false)
    else setValide(true)
  }

  return (
    <Layout index={false}>
      <div className={layoutStyles.termOfUse}>
        <h1>Terms of Use</h1>
        <h2>Before you use this referral form, please read the text below.</h2>
        <h3>By using this form, you agree to these statements:</h3>
        <ul>
          <li>
            <strong>PRISM-AOM is not an emergency service.</strong> If you are
            in a crisis, please call 9-1-1 or contact one of the services listed
            on the right side of this page.
          </li>
          <li>
            You will not use the form wrongly (e.g., spamming or writing false
            information).
          </li>
          <li>
            You will not use the form to spread any hate speech (i.e., speech
            that is intended to insult, offend, or bully a person).
          </li>
          <li>
            Information without your name will be used to evaluate and improve
            this referral service. Click <Link to="/privacy-policy">HERE</Link>
            if you would like to know more about the PRISM-AOM project and our
            Privacy Policy.
          </li>
          <li>
            If you are under 14, the youth mental health team will need to
            contact your parent(s)/guardian(s) (except in rare situations).
          </li>
        </ul>
        <div className={layoutStyles.termOfUseForm}>
          <input
            type="checkbox"
            onClick={() => {
              changeState()
            }}
          />
          <p>I have read, understood, and agree to the Terms of Use.</p>
        </div>
      </div>

      <div className={layoutStyles.welcome}>
        {valide ? (
          <Link to="/forms">
            <button>Continue</button>
          </Link>
        ) : (
          <button disabled>Continue</button>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
