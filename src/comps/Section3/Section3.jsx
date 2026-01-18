import React from 'react'
import H1 from '../H1/H1'
import H5 from '../H5/H5'
import FFoods from '../FFoods/FFoods'

function Section3() {
    return (
        <section id="sec3">
            <div className="container">
                <div className="content">
                    <H5 text={'Special Dishes'}/>
                    <H1 text1={'Standout Dishes'} text2={'From Our Menu'}/>
                    <FFoods />
                </div>
            </div>
        </section>
    )
}

export default Section3