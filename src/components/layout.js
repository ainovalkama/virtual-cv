import React from 'react'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <div className='content'>
                {children}
            </div>
            <footer>
                <h1>Copyright 2022 Aino Valkama
                </h1>
                <p>
                Created with Gatsby
                </p>
            </footer>
        </div>
    )
}