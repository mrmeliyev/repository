import React from 'react'
import FFood from '../FFood/FFood'
import ff1 from '../../assets/ff1.png'
import ff2 from '../../assets/ff2.png'
import ff3 from '../../assets/ff3.png'

function FFoods() {
    return (
        <div className="ffoods">
            <FFood text={'Fattoush salad'} info={'Description of the item'} img={ff1} cost={'24.00'} rate={'4.9'}/>
            <FFood text={'Vegetable salad'} info={'Description of the item'} img={ff2} cost={'26.00'} rate={'4.6'}/>
            <FFood text={'Egg vegi salad'} info={'Description of the item'} img={ff3} cost={'23.00'} rate={'4.5'}/>
        </div>
    )
}

export default FFoods
