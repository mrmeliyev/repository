import React from 'react'

function H1({text1, text2, sp}) {
    return (
        <h1>{text1}<br/>{text2}<span>{sp}</span></h1>
    )
}

export default H1