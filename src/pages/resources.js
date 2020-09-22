import React from "react"
import { Link } from "gatsby"

import resourcesLayout from "../components/resourcesLayout"

import headStyle from "../components/head.module.scss"

const IndexPage = () => {
  return (
    <resourcesLayout>
      <div>
        <Link to="/">
          <p>QUICK EXIT</p>
        </Link>
        <h1>PRISM-AOM IS NOT AN EMERGENCY SERVICE.</h1>
        <p>
          If there is an urgent situation (for example, losing control of
          aggressive or suicidal thoughts), please call: [Call icon] 9-1-1 or go
          to the nearest Emergency Department.
        </p>
        <p>
          Here are other resources that could help (all toll-free, open 24/7).
          All of these services are offered in English and French.
        </p>
      </div>
      <div>
        <div>
          <p>Contact a counsellor at Kids Help Phone</p>
          <ul>
            <li>[Call icon] 1-800-668-6868</li>
            <li>[Text message icon] Text CONNECT to 686868</li>
            <li>[Website icon] www.kidshelpphone.ca (live chat available)</li>
          </ul>
          <img src="/kidshelphone.png" alt="Kids Help Phone" />
        </div>
        <div>
          <p>First Nations and Inuit Hope for Wellness Help Line</p>
          <ul>
            <li>
              [Call icon] 1-855-242-3310 -[Website icon] www.hopeforwellness.ca
              (live chat available)
            </li>
          </ul>
          <img src="/firstnation.jpg" alt="Fist nation" />
        </div>
        <div>
          <p>Interligne (for the LGBTQIA2SP+ community)</p>
          <ul>
            <li>[Call icon] 1-888-505-1010</li>
            <li>[Text message icon] 1-888-505-1010</li>
            <li>[Website icon] www.interligne.co/en (live chat available)</li>
          </ul>
          <img src="/interligne.png" alt="Inter lign" />
        </div>
        <div>
          <p>Find another resource near you</p>
          <ul>
            <li>[Call icon] [hyperlink] Call or dial 2-1-1</li>
            <li>[Website icon] www.211.ca</li>
          </ul>
          <img src="/211.png" alt="211" />
        </div>
      </div>
      <div>
        <div>
          <h1>Ontario-Specific Resources:</h1>
          <div>
            <p>
              The Canadian Mental Health Association’s 24-hour crisis line (for
              anyone 16+ in Lambton County and Kent County)
            </p>
            <ul>
              <li>
                [Call icon] Chatham Kent Mental Health Crisis Line: 519-436-6100
                or 1-866-299-7447
              </li>

              <li>
                [Call icon] Lambton Mental Health Crisis Line: 519-336-3445 or
                1-800-307-4319
              </li>
            </ul>
            <img src="/CMHA.png" alt="CMHA" />
          </div>
          <div>
            <p>
              WAYS Mental Health Support Crisis and Community Support Program
              24/7 crisis line (for youth 6-18 y/o and their parents)
            </p>
            <ul>
              <li>[Call icon] 519-354-4095</li>
            </ul>
            <img src="/WAYS.png" alt="WAYS" />
          </div>
        </div>
        <div>
          <h1>Quebec-Specific Resources:</h1>
          <div>
            <p>Contact a counsellor at Tel-jeunes</p>
            <ul>
              <li>[Call icon] 1-800-263-2266</li>
              <li>[Text message icon] 514-600-1002</li>
              <li>
                [Website icon] www.teljeunes.com/Tel-jeunes-en (live chat
                available)
              </li>
            </ul>
            <img src="/teljeunes.png" alt="teljeunes" />
          </div>
          <div>
            <p>
              To speak to a nurse or a social worker about a health concern,
              call Info-Santé
            </p>
            <ul>
              <li>[Call icon] 8-1-1 </li>
            </ul>
            <img src="/811.png" alt="811" />
          </div>
        </div>
      </div>
    </resourcesLayout>
  )
}

export default IndexPage
