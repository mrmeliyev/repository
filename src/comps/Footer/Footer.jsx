import React from 'react'
import FooterNav from '../FooterNav/FooterNav'
import Infos from '../Infos/Infos'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="content">
                    <Infos />
                    <FooterNav />
                </div>
            </div>
        </footer>
    )
}

export default Footer