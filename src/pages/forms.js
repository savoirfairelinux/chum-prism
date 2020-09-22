import React from "react"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"

const IndexPage = () => {
  return (
    <Layout index={false}>
      <h1>
        Please choose one of the buttons to enter the PRISM-AOM online referral
        form!
      </h1>
      <h2>Click if you are filling out this form for….</h2>
      <div className={layoutStyles.forms}>
        <a href="http://www.ymhtech.com/welcome">
          <button>
            YOURSELF
            <br />
            <br />
            <img
              src="/oneperson.png"
              alt="One person"
              className={layoutStyles.formIcon}
            />
          </button>
        </a>
        <a href="http://www.ymhtech.com/welcome">
          <button>
            SOMEONE ELSE
            <br />
            <br />
            <img
              src="/twopersons.png"
              alt="Two person"
              className={layoutStyles.formIcon}
            />
          </button>
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
