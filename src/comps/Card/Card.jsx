import React from 'react'
import H3 from '../H3/H3'
import P from '../P/P'

function Card({img, text, p}) {
    return (
        <div className='card'>
            <img src={img} alt="" />
            <H3 text={text}/>
            <P text1={p}/>
        </div>
    )
}

export default Card