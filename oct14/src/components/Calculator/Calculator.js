import React from 'react'
import History from './History';
import './Calculator.css'

function Calculator(){
    const num=5;
    return(
        <>
        <h1>Simple Calculator</h1>
        <div className="input-fields">
            <input defaultValue="Enter 1st value here"/><br/><br/>
            <input defaultValue="Enter 2nd value here"/><br/><br/>

            <button className="btn1">Sum Up {num}</button>
            
        </div>

        <History/>
        </>
    )
}

export default Calculator