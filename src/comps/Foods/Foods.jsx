import React from 'react'
import Food from '../Food.jsx/Food'

function Foods() {
    return (
        <div className="foods">
            <Food text={'Main Dish'} number={'(86 dishes)'} img={'/src/assets/f1.png'}/>
            <Food text={'Break Fast'} number={'(48 dessert)'} img={'/src/assets/f2.png'}/>
            <Food text={'Dessert'} number={'(48 dessert)'} img={'/src/assets/f3.png'}/>
            <Food text={'Browse All'} number={'(255 Items)'} img={'/src/assets/f4.png'}/>
        </div>
    )
}

export default Foods