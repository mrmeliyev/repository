import React from 'react'
import Card from '../Card/Card'

import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'

function Cards() {
    return (
        <div className="cards">
            <Card img={c1} text={'Catering'} p={'Delight your guests with our flavors'}/>
            <Card img={c2} text={'Fast delivery'} p={'We deliver your order promptly to your door'}/>
            <Card img={c3} text={'Online Ordering'} p={'Explore menu & order with ease using'}/>
            <Card img={c4} text={'Gift Cards'} p={'Give the gift of exceptional dining with Foodi'}/>
        </div>
    )
}

export default Cards