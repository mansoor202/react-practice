import { useEffect, useState } from "react"
export function Category(props){

//     const [user,setUser]=useState({})
//     let [key,setKey]=useState(0)
     useEffect(()=>{
        console.log('working in useEffect');
        // const newUser=props.newUser ? "No registered user" : props.newUser;
        // addUser()
        // setKey(++key)

},[props.shouldUpdate])

    // function addUser(){
    //     setUser(props.newUser)
    // }

    return(
        <>
        {console.log("Category: ",props?.newUser?.firstName)}
        
      
        <h2>Registered Users </h2>
        <ul>
        <div><p>{props?.newUser?.firstName}</p></div>
        </ul>
        </>
    )

}