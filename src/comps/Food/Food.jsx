import React from 'react'
import H5 from '../H5/H5'
import H2 from '../H2/H2'
import P from '../P/P'

function Food({text, number, img}) {
    return (
        <div className="food">
            <img src={img} alt="" />
            <H2 text={text}/>
            <P text1={number}/>
        </div>
    )
}

export default Food