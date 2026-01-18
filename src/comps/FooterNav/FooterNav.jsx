import React from 'react'
import Social from '../Social/Social'
import P from '../P/P'

function FooterNav() {
    return (
        <nav>
            <Social img={'/src/assets/s1.png'}/>
            <Social img={'/src/assets/s2.png'}/>
            <Social img={'/src/assets/s3.png'}/>
            <Social img={'/src/assets/s4.png'}/>
            <P text1={'Copyright 2023 Dscode | All rights reserved'}/>
        </nav>
    )
}

export default FooterNav