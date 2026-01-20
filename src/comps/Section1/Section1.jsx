import React from 'react'
import H1 from '../H1/H1'
import P from '../P/P'
import Button from '../Button.jsx/Button'

import foood from '../../assets/foood.png'

function Section1() {
    return (
        <section id='sec1'>
            <div className="container">
                <div className="content">
                    <div className="info">
                        <H1 text1={'Dive into Delights'} text2={'Of Delectable '} sp={'Food'}/>
                        <P text1={'Where Each Plate Weaves a Story of Culinary'} text2={'Mastery and Passionate Craftsmanship'}/>
                        <div className="rating">
                            <Button text={'Order Now'}/>
                            <P text1={'Watch Video'}/>
                            <button className='play'><span className="material-symbols-outlined">play_arrow</span></button>
                        </div>
                    </div>
                    <img src={foood} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section1