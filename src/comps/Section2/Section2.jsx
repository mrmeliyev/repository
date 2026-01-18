import React from 'react'
import H5 from '../H5/H5'
import H1 from '../H1/H1'
import Foods from '../Foods/Foods'

function Section2() {
    return (
        <section id="sec2">
            <div className="container">
                <div className="content">
                    <H5 text={'Customer Favorites'}/>
                    <H1 text1={'Popular Categories'}/>
                    <Foods />
                </div>
            </div>
        </section>
    )
}

export default Section2