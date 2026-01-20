import React from 'react'
import Social from '../Social/Social'
import P from '../P/P'

import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.png'

function FooterNav() {
    return (
        <nav>
            <Social img={s1}/>
            <Social img={s2}/>
            <Social img={s3}/>
            <Social img={s4}/>
            <P text1={'Copyright 2023 Dscode | All rights reserved'}/>
        </nav>
    )
}

export default FooterNav