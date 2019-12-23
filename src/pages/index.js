import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Welcome / Bienvenue</h1>
            <div>
                <Link to='/welcome'><button>English</button></Link>
                <button>Français</button>
            </div>
            <p>*Please note that this is a new referral service that is only available to youth 11 to 25 years old in the following communities in Canada as part of a pilot project:</p>
            <p>Sites</p>
            <p>Coming Soon!</p>
        </Layout>
    )
}

export default IndexPage