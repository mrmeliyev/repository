import React from 'react'
import Info from '../Info/Info'
import P from '../P/P'

import logo from '../../assets/logo.png'

function Infos() {
    return (
        <div className="infos">
            <div className="foodi">
                <img src={logo} alt="" />
                <P text1={'Savor the artistry where every dish is a culinary masterpiece'}/>
            </div>
            <Info text={'Useful links'} t1={'About us'} t2={'Events'} t3={'Blogs'} t4={'FAQ'}/>
            <Info text={'Main Menu'} t1={'Home'} t2={'Offers'} t3={'Menus'} t4={'Reservation'}/>
            <Info text={'Contact Us'} t1={'example@email.com'} t2={'+64 958 248 966'} t3={'Social media'}/>
        </div>   
    )
}

export default Infos