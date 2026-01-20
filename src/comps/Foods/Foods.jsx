import React from 'react'
import Food from '../Food/Food'
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import f4 from '../../assets/f4.png'

function Foods() {
    return (
        <div className="foods">
            <Food text={'Main Dish'} number={'(86 dishes)'} img={f1}/>
            <Food text={'Break Fast'} number={'(48 dessert)'} img={f2}/>
            <Food text={'Dessert'} number={'(48 dessert)'} img={f3}/>
            <Food text={'Browse All'} number={'(255 Items)'} img={f4}/>
        </div>
    )
}

export default Foods