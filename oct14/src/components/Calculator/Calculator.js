import React from 'react'

import './Calculator.css'

function Calculator(){
    return(
        <>
        <h1>Simple Calculator</h1>
        <div className="input-fields">
            <input defaultValue="Enter 1st value here"/><br/><br/>
            <input defaultValue="Enter 2nd value here"/><br/><br/>
            
            <button className="btn1">Sum Up</button>
            
        </div>
        </>
    )
}

export default Calculator