import React from 'react'

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className='footer p-10 bg-base-300 text-neutral-content footer-center'>
            <p>© {year} GitHub Finder. All rights reserved.</p>
        </footer>
    )
}

export default Footer
