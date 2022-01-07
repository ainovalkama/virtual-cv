import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from '../components/Nav'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div class="Header">
          <Nav></Nav>
          
        </div>

    <div class="Content">
      <h1>
         Moi!<br />
         Olen...<br />
      </h1>
      <h2>
        Aino Valkama <br />
      </h2>
      <div className="a">
        <p>teekkari <br /></p>
        </div>
       <div className="b">
       <p>espoolainen <br /></p>
       </div>
       <div className="c">
       <p>koodari <br /></p>
       </div>
       <div className="d">
       <p>hyvä tyyppi <br /></p>
       </div>
       <div className="e">
       <p>kiinnostunut uusista työmahdollisuuksista<br /></p>
       </div>
       </div>
      <div className="Content2">
      <h1>
        Ota yhteyttä
      </h1>
      <StaticImage
      src="../images/Aino.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Aino!"
      style={{ marginBottom: `1.45rem` }}
    />
      <p>


    </p>
    </div>


  </Layout>
)

export default IndexPage
