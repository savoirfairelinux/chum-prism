import React from "react"
import { Link } from "gatsby"

import Layout from "../components/homeLayout"

import headStyle from "../components/head.module.scss"

const IndexPage = () => {
  return (
    <Layout index={true}>
      <h1>WELCOME | BIENVENUE</h1>
      <div>
        <Link to="/welcome">
          <button>ENGLISH</button>
        </Link>
        <button>FRANÇAIS</button>
      </div>
      <div className={headStyle.headContainer}>
        <div className={headStyle.headImage}>
          <img src={"/head.png"} alt="Head" className={headStyle.logohead} />
        </div>
        <div className={headStyle.headParagraph}>
          <p>
            Help is more{" "}
            <span className={headStyle.orangeSpan}>accessible </span> than you
            think!
          </p>
          <p>
            L’aide est plus{" "}
            <span className={headStyle.orangeSpan}>accessible </span>
            que vous le pensez!
          </p>
          <img
            src={"/footer.png"}
            alt="Youth Mental Health"
            className={headStyle.logoPrism}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
