import React from 'react'
import P from '../P/P'
import H4 from '../H4/H4'

function Info({text, t1, t2, t3, t4}) {
    return (
        <div className="info">
            <H4 text={text}/>
            <a href="">{t1}</a>
            <a href="">{t2}</a>
            <a href="">{t3}</a>
            <a href="">{t4}</a>
        </div>
    )
}

export default Info