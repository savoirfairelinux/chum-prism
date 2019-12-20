import React from 'react'

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <div className={layoutStyles.main}>
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </div>
            <Sidebar />
        </div>
    )
}

export default Layout