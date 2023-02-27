import React from "react"
import { Link } from "gatsby"

import Layout from "../components/homeLayout"

import headStyle from "../components/head.module.scss"
import layoutStyles from "../components/layout.module.scss"

import ServiceDownPopup from "../components/serviceDownPopup"

const IndexPage = () => {

  const [valide, setValide] = React.useState(false)
  const [clicked, setClicked] = React.useState(true)

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
      {/* {!valide && clicked &&<div className={layoutStyles.modalIndex}>
          <div className={layoutStyles.modalContentServiceDown}>
            <span className={layoutStyles.modalContentClose} onClick={()=>setClicked(false)}>&times;</span>
            <ServiceDownPopup />
          </div>
        </div>} */}
    </Layout>
  )
}

export default IndexPage
