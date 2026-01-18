import React from 'react'
import H6 from '../H6/H6'
import P from '../P/P'
import RateD from '../RateD/RateD'
import H2 from '../H2/H2'

function FFood({text, info, img, cost, rate}) {
    return (
        <div className="ffood">
            <img src={img} alt="" />
            <H2 text={text}/>
            <P text1={info}/>
            <div className="des">
                <H6 text={cost}/>
                <RateD text={rate}/>
            </div>
        </div>
    )
}

export default FFood