import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <a href="http://www.ymhtech.com/welcome">
        <img
          src={"/footer.png"}
          alt="Prism"
          style={
            window.location.pathname == "/forms"
              ? { width: "25rem" }
              : { width: "200" }
          }
        />
      </a>
    </div>
  )
}

export default Footer
