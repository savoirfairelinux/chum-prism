import React from 'react'

import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <a href='http://www.ymhtech.com/welcome'><img src={'/footer.png'} alt="Prism" width='200'/></a>
        </div>
    )
}

export default Footer