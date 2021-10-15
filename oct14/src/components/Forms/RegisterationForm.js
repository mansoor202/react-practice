import { logDOM } from "@testing-library/dom";
import React, { useEffect, useState } from "react";

export function  RegisterationForm(props){
    const [fName,setFName]=useState('')
    const [lName,setLName]=useState('')
    const [count,setCount]=useState(0)

    const changeFName=(e)=>{
        setFName(e.target.value)

    }
    const changeLName=(e)=>{
        setLName(e.target.value)

    }
    
    const handleSubmit=()=>{
        alert (fName+" "+lName+" ,we received your data")
        setCount((count)=>setCount(count+1))
    }

    useEffect(()=>{
        console.log("component updated")

    },[count])

    

    return(
        <div>
            <h2>RegisterationForm</h2>
           
            <input placeholder="First Name"  value={fName} onChange={changeFName}/><br/><br/>
           
            <input placeholder="lastName" value={lName} onChange={changeLName}/><br/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

