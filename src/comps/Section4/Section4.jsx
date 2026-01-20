import React from 'react'
import H5 from '../H5/H5'
import H1 from '../H1/H1'
import P from '../P/P'
import H4 from '../H4/H4'
import RateD from '../RateD/RateD'

import pro1 from '../../assets/pro1.png'
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.png'
import chef from '../../assets/chef.png'

function Section4() {
    return (
        <section id='sec4'>
            <div className="container">
                <div className="content">
                    <img className='chef' src={chef} alt="" />
                    <div className="info">
                        <H5 text={'Testimonials'}/>
                        <H1 text1={'What Our Customers'} text2={'Say About Us'}/>
                        <P text1={"“I had the pleasure of dining at Foodi last night, I'm still"} text2={'raving about the experience! The attention to detail service'}/>
                        <div className="profee">
                            <div className="pros">
                                <img src={pro1} alt="" />
                                <img src={pro2} alt="" />
                                <img src={pro3} alt="" />
                            </div>
                            <div className="fees">
                                <H4 text={'Customer Feedback'}/>
                                <div className="rating">
                                    <RateD text={'4.9'}/>
                                    <P text1={'(18.6k Reviews)'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4