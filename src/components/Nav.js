import { Link } from 'gatsby'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import '../styles/global.css'
import '../styles/header.css'

export default function Nav() {
    return (
        <nav>
            <icons class="icons">
            <li class="left"><a href="https://www.linkedin.com/in/ainovalkama" target="_blank">
            <StaticImage
                src="../images/linkedin.png"
                alt="LinkedIn icon"
                placeholder="blurred"
                layout="fixed"
                width={25}
            />
            </a></li>
            <li class="left"><a href= "https://www.github.com/ainovalkama" target="_blank">
            <StaticImage
                src="../images/github.png"
                alt="Github icon"
                placeholder="blurred"
                layout="fixed"
                width={25}
            />
            </a></li>
            <li class="left"><a href = "https://t.me/kuningasaino" target="_blank">
            <StaticImage
                src="../images/telegram.png"
                alt="Telegram icon"
                placeholder="blurred"
                layout="fixed"
                width={25}
            />
            </a></li>
            </icons>
            <div class="navitems">
                <Link to="#contact">Ota yhteyttä</Link>
            </div>
        </nav>
    )
}