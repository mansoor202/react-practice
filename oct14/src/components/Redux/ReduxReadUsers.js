import { useState } from "react";
import store from "../../Store";

export function ReduxReadUsers(){
    const [count,setCount]=useState(0)
    function returnNames(){
        let state=store.getState();
        let users=state.users;
        return(users.map(user=><li>{user.name}</li>)
        )
        console.log("users till now",state.users)
    }

    store.subscribe(()=>{
        setCount(count+1)

    })
    return(
        <div>
            <h2>Names Here</h2>
           <ul>
               {returnNames}
           </ul>
        </div>
    )
}