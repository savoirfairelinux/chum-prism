import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"

const IndexPage = () => {
  return (
    <Layout index={false}>
      <div className={layoutStyles.welcomeFirstBlock}>
        <h1>Welcome to the PRISM-ACCESS Open Minds online referral service!</h1>
        <p>
          Through this website, you can access a referral form to get help
          directly from a youth mental health worker in your community, for
          yourself or a young person you care about.
        </p>
        <p>
          *Please note that this is a new referral service that is only
          available to youth 11 to 25 years old in Canada living in Downtown
          Montreal, Quebec (for youth in homeless situations) and Chatham Kent,
          Ontario.
        </p>

        <h2>This is not an emergency service.</h2>
      </div>
      <div className={layoutStyles.welcomeSecondBlock}>
        <h1>How does it work?</h1>
        <div className={layoutStyles.row}>
          <div className={layoutStyles.column}>
            <p>
              <img
                src={"/listarrow.png"}
                alt="Yellow arrow"
                className={layoutStyles.listArrow}
              />
              <strong className={layoutStyles.step}>Step 1: </strong>
              You’ll be asked for some basic information about yourself. There
              are no right or wrong answers. You can skip questions by clicking
              “next” or change your information by clicking “back.”
            </p>
          </div>
          <div className={layoutStyles.column}>
            <p>
              <img
                src={"/listarrow.png"}
                alt="Yellow arrow"
                className={layoutStyles.listArrow}
              />
              <strong className={layoutStyles.step}>Step 2:</strong> Once you
              have completed the form, your referral will be sent to a youth
              mental health worker in your community. They will contact you
              within three days, using the method of your choice (e.g., text,
              phone, email).
            </p>
          </div>
        </div>
      </div>

      <div className={layoutStyles.schemaImage}>
        <img
          src={"/anxious.png"}
          alt="Prism symbol"
          className={layoutStyles.schemaImage1}
        />
        <img
          src={"/arrow1.png"}
          alt="Prism symbol"
          className={layoutStyles.schemaImageArrow1}
        />
        <img
          src={"/referral.png"}
          alt="Prism symbol"
          className={layoutStyles.schemaImage2}
        />
        <img
          src={"/arrow1.png"}
          alt="Prism symbol"
          className={layoutStyles.schemaImageArrow2}
        />
        <img
          src={"/chat.png"}
          alt="Prism symbol"
          className={layoutStyles.schemaImage3}
        />
      </div>

      <div className={layoutStyles.welcome}>
        <Link to="/term-of-use">
          <button>Continue</button>
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
