import { useState } from "react"
import store from "../../Store"
export function ReduxAddUserForm (){
    let [name,setName]=useState('')
    const actionObj={
        type:'userAdded',
        payload:{
            name
        }
    }

    function addUser(){
        store.dispatch(actionObj)

    }

    function handleNameChange(e){
        setName(e.target.value)
    }

    return (
        <div>
            <h2>User Adding Component</h2>
        <input onChange={handleNameChange} value={name}/><br/><br/>
        <button onClick={addUser}>Add New User</button>
        </div>
    )
}
