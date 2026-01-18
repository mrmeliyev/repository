import React from 'react'
import Card from '../Card/Card'

function Cards() {
    return (
        <div className="cards">
            <Card img={'/src/assets/c1.png'} text={'Catering'} p={'Delight your guests with our flavors'}/>
            <Card img={'/src/assets/c2.png'} text={'Fast delivery'} p={'We deliver your order promptly to your door'}/>
            <Card img={'/src/assets/c3.png'} text={'Online Ordering'} p={'Explore menu & order with ease using'}/>
            <Card img={'/src/assets/c4.png'} text={'Gift Cards'} p={'Give the gift of exceptional dining with Foodi'}/>
        </div>
    )
}

export default Cards