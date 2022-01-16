import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"


export default function NotFound() {
    return (
        <Layout>
        <div className="error">
            <h1>Tätä sivua ei ole olemassa :(<br /></h1>
             <h2><Link to="/">Takaisin etusivulle!</Link></h2>
            </div>
        </Layout>
    )
}
