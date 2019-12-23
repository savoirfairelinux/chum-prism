import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <div className={headerStyles.header}>         
            <Link to='/'><img src={'/prism.png'} alt="Prism" className={headerStyles.logo}/></Link>
        </div>
    )
}

export default Header