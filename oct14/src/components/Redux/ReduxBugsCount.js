import { useCallback, useState } from "react";
import store from "../../Store";
export function ReduxBugsCount(){
    const [count,setCount]=useState(0)
    let errList=store.getState();
    store.subscribe(()=>{
        console.log("store changed: In Bugs count component ")
        setCount(count+1)
    })
    return(
        <p>{errList.length}</p>
    )

}