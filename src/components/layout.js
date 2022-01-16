import React from 'react'
import '../styles/global.css'
import '../styles/header.css'
import '../styles/error.css'
import '../styles/footer.css'

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <main>
                {children}
            </main>
            <div class="footer">
                <h1>Copyright 2022 Aino Valkama
                </h1>
                <p>
                Created with Gatsby
                </p>
            </div>
        </div>
    )
}