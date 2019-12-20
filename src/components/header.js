import React from 'react'
import { Link } from 'gatsby'

//import './header.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <div>         
            <Link to='/'><img src={'/prism.png'} alt="Prism" width='400'/></Link>
        </div>
    )
}

export default Header