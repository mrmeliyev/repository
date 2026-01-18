import React from 'react'
import FFood from '../FFood/FFood'

function FFoods() {
    return (
        <div className="ffoods">
            <FFood text={'Fattoush salad'} info={'Description of the item'} img={'/src/assets/ff1.png'} cost={'24.00'} rate={'4.9'}/>
            <FFood text={'Vegetable salad'} info={'Description of the item'} img={'/src/assets/ff2.png'} cost={'26.00'} rate={'4.6'}/>
            <FFood text={'Egg vegi salad'} info={'Description of the item'} img={'/src/assets/ff3.png'} cost={'23.00'} rate={'4.5'}/>
        </div>
    )
}

export default FFoods
