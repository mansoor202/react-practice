import { useState } from "react";
import store from "../../Store";
export function ReduxBugs() {
  const [count,setCount]=useState(0)
  function deleteError(e){
    console.log("Deleting ",e.target.id ,typeof(e.target.id))

    store.dispatch({
      type:"bugRemoved",
      payload:{
          id:Number(e.target.id)
      }
  })

  }
  function getErrNames() {
    
   let curState=store.getState();
   console.log("CurState ",curState, "type ",curState.length)
   
   return(curState.map((err)=>{
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
