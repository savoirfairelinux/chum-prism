import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const [url, setUrl] = React.useState("")

  React.useEffect(() => {
    setUrl(window.location.pathname)
  }, [])
  return (
    <div className={footerStyles.footer}>
      <a href="http://www.ymhtech.com/welcome">
        <img
          src={"/footer.png"}
          alt="Prism"
          style={url === "/forms" ? { width: "25rem" } : { width: "200" }}
        />
      </a>
    </div>
  )
}

export default Footer
