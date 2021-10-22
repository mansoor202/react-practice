import { useState } from "react";
import store from "../../Store";
import * as actions from '../Redux/ReduxActionTypes'
export function ReduxBugs() {
  const [count,setCount]=useState(0)
  function deleteError(e){
    console.log("Deleting ",e.target.id ,typeof(e.target.id))

    store.dispatch({
      type:actions.BugRemoved,
      payload:{
          id:Number(e.target.id)
      }
  })

  }

  function isResolved(status){
    if (status==true){
      return "Resolved"

    }
    else{
      return "Not Resolved"
    }
  }
  function getErrNames() {
    
   let curState=store.getState();
   console.log("CurState ",curState, "type ",curState.length)
   
   return(curState.errors.map((err)=>{
     return(
   <li key={err.id}>{err.description}

   <button id={err.id} key={err.id} onClick={deleteError}>Delete {err.id}</button>
   </li>
   )}))
  }

  store.subscribe(()=>{
    // console.log("store changed ",store.getState())
    let curState=store.getState();
    setCount(count+1)
  })

  return (
    <div>
        <ul>
      {getErrNames()}
      </ul>
     
      
     
    </div>
  );
}
