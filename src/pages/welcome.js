import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <h2>Welcome to the PRISM-ACCESS Open Minds online referral form!</h2>
            <p>With this referral form you can receive help directly from a youth mental health worker in your community, for yourself or a young person you care about.</p>

            <h2>Before you continue to the Online Referral Form, please read the Terms of Use: </h2>
            <p>By using the PRISM-AOM Online Referral Form, you agree to the following statements:</p>
            <ul>
                <li>PRISM-AOM is not an emergency service. If you are in a crisis, please call 9-1-1 or contact one of the resources on the right side  of this page.</li>
                <li>You will not use the form maliciously (eg. spamming or inputting false information), or use the form to disseminate any form of hate speech.</li>
                <li>By continuing to browse this website, you agree to the use of cookies. Click <Link to="/privacy-policy">HERE</Link> if you’d like to know more about the PRISM-AOM project and our Privacy Policy.</li>
            </ul>

            <div className={layoutStyles.welcome}>
                <Link to='/forms'><button>I agree to the terms of use</button></Link>
            </div>
        </Layout>
    )
}

export default IndexPage