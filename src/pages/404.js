import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"


export default function NotFound() {
    return (
        <Layout>
        <div className="Error">
            <h1>Tätä sivua ei ole olemassa :(</h1>
                <Link to="/">Takaisin etusivulle!</Link>
            </div>
        </Layout>
    )
}
