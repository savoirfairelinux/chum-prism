import React from "react"
import { Link } from "gatsby"

import Layout from "../components/homeLayout"

import headStyle from "../components/head.module.scss"
import layoutStyles from "../components/layout.module.scss"

import Popup from "../components/Popup"

const IndexPage = () => {


  React.useEffect(() => {
    localStorage.removeItem("language")
  })

  return (
    <Layout>
      <h1>WELCOME | BIENVENUE</h1>
      <div className={layoutStyles.homeButtons}>
        <Link
          to="/welcome"
          state={{ language: "en" }}
          onClick={() => {
            localStorage.setItem("language", "en")
          }}
        >
          <button>ENGLISH</button>
        </Link>
        <Link
          to="/welcome"
          state={{ language: "fr" }}
          onClick={() => {
            localStorage.setItem("language", "fr")
          }}
        >
          <button>FRANÇAIS</button>
        </Link>
      </div>
      <div className={headStyle.headContainer}>
        <div className={headStyle.headImage}>
          <img src={"/head_with_text.png"} alt="Head" className={headStyle.logohead} />
        </div>
      </div>
      <Popup />
    </Layout>
  )
}

export default IndexPage
