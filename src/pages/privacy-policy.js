import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.scss'

const PrivacyPolicyPage = () => {
    return (
        <Layout>
            <div className={layoutStyles.forms}>
                <h3>PRISM AOM</h3>
                <p>This new online referral form has been created in collaboration with ...</p>
                <p>It is being evaluated as part of a …</p>
                <p>For more information …</p>
                <p>For more information about …</p>

                <h3>PRIVACY POLICY</h3>
                <Link to="/welcome"><button>Get back to home page</button></Link>
            </div>
        </Layout>
    )
}

export default PrivacyPolicyPage