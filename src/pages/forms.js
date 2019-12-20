import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import layoutStyles from '../components/layout.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Please click one of the two buttons to enter the PRISM-AOM Online Referral form!</h1>
            <div className={layoutStyles.forms}>
                <a href='http://www.ymhtech.com/welcome'>
                    <button>
                        Click here if you are filling out this form for YOURSELF
                        <br/><br/>
                        <i class="material-icons">accessibility</i>
                    </button>
                </a>
                <a href='http://www.ymhtech.com/welcome'>
                    <button>
                        Click here if you are filling out this form for SOMEONE ELSE
                        <br/><br/>
                        <i class="material-icons">emoji_people</i>
                    </button>
                </a>
            </div>
        </Layout>
    )
}

export default IndexPage    