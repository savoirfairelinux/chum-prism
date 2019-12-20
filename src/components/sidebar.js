import React from 'react'
import { Link } from 'gatsby'

import layoutStyles from './layout.module.scss'

const Sidebar = () => {
    return (
        <div className={layoutStyles.sidebar}>
            <nav>
                <ul className={layoutStyles.navList}>
                    <li className={layoutStyles.navItem}>If there is an urgent situation (for example, losing control of aggressive or suicidal thoughts), please:
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}>Call <a href="tel:9-1-1">9-1-1</a></li>
                        </ul>
                    </li>
                    <li>Here are other resources that could help:</li>
                    <li>Contact a counsellor at Kids Help Phone (open 365 days/year, 24/7)
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}><a href="tel:1-800-668-6868">1-800-668-6868</a> (toll-free)</li>
                            <li className={layoutStyles.navItem}>Live chat <a href="https://kidshelpphone.ca/">https://kidshelpphone.ca/</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>Tel-jeunes (toll-free, open 365 days/year, 24/7)
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}><a href="tel:1-800-263-2266">1-800-263-2266</a></li>
                            <li className={layoutStyles.navItem}>Text messages: <a href="tel:514-600-1002">514-600-1002</a></li>
                            <li className={layoutStyles.navItem}>Live chat: <a href="https://www.teljeunes.com/Tel-jeunes">https://www.teljeunes.com/Tel-jeunes</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>Contact First Nations and Inuit Hope for Wellness Help Line (open 365 days/year, 24/7)
                        <ul className={layoutStyles.navList}>
                            <li><a href="tel:1-855-242-3310">1-855-242-3310 (toll-free)</a></li>
                            <li className={layoutStyles.navItem}>Live Chat <a href="https://www.hopeforwellness.ca">https://www.hopeforwellness.ca</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>Interligne (for the LGBTQIA2SP+ community; toll-free, open 365 days/year, 24/7)
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}><a href="tel:1-888-505-1010">1-888-505-1010</a></li>
                            <li className={layoutStyles.navItem}>Live chat:<a href="https://interligne.co/en/chat">https://interligne.co/en/chat</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>Find another resource near you:
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}>Visit <a href="http://211.ca/">http://211.ca/</a> or dial <a href="tel:2-1-1">2-1-1</a></li>
                        </ul>
                    </li>
                    <li className={layoutStyles.navItem}>
                        To speak to a nurse or a social worker about a health concern, call Info-Santé:
                        <ul className={layoutStyles.navList}>
                            <li className={layoutStyles.navItem}>Dial <a href="tel:8-1-1">8-1-1</a> (in Quebec)</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar