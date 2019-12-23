import React, { Component } from 'react'
import { Link } from 'gatsby'

import layoutStyles from './layout.module.scss'

class HeadeSidebarToggleButton extends Component {

    toogleSideBar = () => {
        console.log(document.getElementById('content'))
        if(document.getElementById('content').className.includes('full')){
            document.getElementById('content').className = layoutStyles.content;
            document.getElementById('sidebar').className = layoutStyles.sidebar;
        }else{
            document.getElementById('content').className = layoutStyles.fullContent;
            document.getElementById('sidebar').className = layoutStyles.fullSidebar;
        }

    }

    render() {
        return <i className="material-icons" onClick={this.toogleSideBar}>help</i>
    }
}


const Sidebar = () => {
    return (
        <div id='sidebar' className={layoutStyles.sidebar}>
            <div className={layoutStyles.sidebarHeader}><HeadeSidebarToggleButton/></div>
            <nav className={layoutStyles.sidebarMainWeb}>
                <ul className={layoutStyles.navList}>
                    <li className={layoutStyles.navItem}>If there is an urgent situation (for example, losing control of aggressive or suicidal thoughts), please:
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}><a href="tel:9-1-1"><i className="material-icons">phone</i> Call 9-1-1</a></li>
                        </ul>
                    </li>
                    <li>Here are other resources that could help:</li>
                    <li>Contact a counsellor at Kids Help Phone (open 365 days/year, 24/7)
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}><a href="tel:1-800-668-6868"><i className="material-icons">phone</i> 1-800-668-6868</a> (toll-free)</li>
                            <li className={layoutStyles.navItem}><a href="https://kidshelpphone.ca/"><i className="material-icons">chat</i> kidshelpphone.ca</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>Tel-jeunes (toll-free, open 365 days/year, 24/7)
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}><a href="tel:1-800-263-2266"><i className="material-icons">phone</i> 1-800-263-2266</a></li>
                            <li className={layoutStyles.navItem}><a href="tel:514-600-1002"><i className="material-icons">chat</i> 514-600-1002</a></li>
                            <li className={layoutStyles.navItem}><a href="https://www.teljeunes.com/Tel-jeunes">teljeunes.com/Tel-jeunes</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>Contact First Nations and Inuit Hope for Wellness Help Line (open 365 days/year, 24/7)
                        <ul className={layoutStyles.navList}>
                            <li><a href="tel:1-855-242-3310"><i className="material-icons">phone</i> 1-855-242-3310 (toll-free)</a></li>
                            <li className={layoutStyles.navItem}><a href="https://www.hopeforwellness.ca"><i className="material-icons">chat</i> hopeforwellness.ca</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>Interligne (for the LGBTQIA2SP+ community; toll-free, open 365 days/year, 24/7)
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}><a href="tel:1-888-505-1010"><i className="material-icons">phone</i> 1-888-505-1010</a></li>
                            <li className={layoutStyles.navItem}><a href="https://interligne.co/en/chat"><i className="material-icons">chat</i> interligne.co/en/chat</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>Find another resource near you:
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}><a href="http://211.ca/"><i className="material-icons">web</i> 211.ca</a></li>
                            <li className={layoutStyles.navItem}><a href="tel:2-1-1"><i className="material-icons">phone</i> 2-1-1</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>
                        To speak to a nurse or a social worker about a health concern, call Info-Santé:
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}><a href="tel:8-1-1"><i className="material-icons">phone</i> 8-1-1</a> (Quebec)</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Sidebar