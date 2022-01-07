import { Link } from 'gatsby'
import React from 'react'

export default function Nav() {
    return (
        <nav>
            <div className="internalLinks">
                <Link to="/about">Kuka olen?         </Link>
                <Link to="/contact">Ota yhteyttä</Link>
            </div>
        </nav>
    )
}