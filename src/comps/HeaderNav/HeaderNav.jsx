import React from 'react'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import Button from '../Button.jsx/Button.jsx'

function HeaderNav() {
    return (
        <div className="container">
            <nav>
                <Logo />
                <Navbar />
                <Button text='Contact'/>
            </nav>
        </div>
    )
}

export default HeaderNav
