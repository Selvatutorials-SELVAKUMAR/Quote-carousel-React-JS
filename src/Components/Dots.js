import './Dots.css'

import React from 'react'
import Data from './Data'
export default function Dots({current}) {
    const dots = Data.map((data,index) => {
        return <span className = {
            current === index ? "dot activedot" : "dot"
        } key = {index}>

        </span>
    })
    return (
        <div className = "dots-container">
            {dots}
        </div>
    )
}
