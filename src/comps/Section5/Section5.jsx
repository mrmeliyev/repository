import React from 'react'
import H5 from '../H5/H5'
import H1 from '../H1/H1'
import P from '../P/P'
import Button from '../Button.jsx/Button'
import Cards from '../Cards/Cards'

function Section5() {
  return (
    <section id="sec5">
        <div className="container">
            <div className="content">
                <div className="info">
                    <H5 text={'Our Story & Services'}/>
                    <H1 text1={'Our Culinary Journey'} text2={'And Services'}/>
                    <P text1={'Rooted in passion, we curate unforgettable dining'} text2={'experiences and offer exceptional services'}/>
                    <Button text={'Explore'}/>
                </div>
                <Cards />
            </div>
        </div>
    </section>
  )
}

export default Section5