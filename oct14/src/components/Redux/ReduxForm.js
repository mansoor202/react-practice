import { useState } from "react"
import store from "../../Store"
export default function ReduxForm(){
    const [description,setDescription]=useState('');
    const [count,setCount]=useState(0);

    const changeDescription=(e)=>{
        setDescription(e.target.value)

    }
    const addBug=()=>{
        store.dispatch({
            type:"bugAdded",
            payload:{
                description:description
            }
        })

        setCount(count+1)
    }

  

    return(
        <>

        <h2>Add bug here</h2>
        <label>Description: </label>
        <input onChange={changeDescription} value={description}/>
        <button onClick={addBug}>Add Bug</button>
        
        
        </>
    )
}