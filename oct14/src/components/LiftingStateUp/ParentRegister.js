import { fireEvent, logDOM } from "@testing-library/dom";
import React, { useEffect, useState } from "react";
import { Category } from "./Category";

export function ParentRegister(props) {
 
  const [count, setCount] = useState(0);
  const [cur_state,setCurState]=useState({firstName:'Mansoor',lastName:'gjadhg',message:'msg1 ',category:'seller'})

 

  const changeFName = (e) => {
    setCurState({...cur_state,firstName:e.target.value})
  };
  const changeLName = (e) => {
    setCurState({...cur_state,lastName:e.target.value})
  };

  const changeMessage = (e) => {
    setCurState({...cur_state,message:e.target.value})
  };
  const changeUser = (e) => {
    setCurState({...cur_state,category:e.target.value})
  };

  const handleSubmit = () => {
  
   alert (cur_state.firstName,"we received your value")
    setCount((count) => setCount(count + 1));
  };


  useEffect(() => {
      console.log("Updated parent Component")
      console.log('cur value of count',count)
  }, [count]);

  return (
      <>
    <div>
      <h2>Parent Registeration Form</h2>

      <input placeholder="First Name" value={cur_state.firstName} onChange={e=>setCurState({firstName:e.target.value})} />
      <br />
      <br />

      <input placeholder="lastName" value={cur_state.lastName} onChange={changeLName} />
      <br />
      <br />
      <textarea
        placeholder="start writing here "
        value={cur_state.message}
        onChange={changeMessage}
      ></textarea>
      <br />
      <br />
      <select value={cur_state.category} onChange={changeUser}>
        <option value="Seller">Seller</option>
        <option value="Purchaser">Purchaser</option>
        <option value="Delivery Boy">Delivery Man</option>
        <option value="none">Other</option>
      </select>

    {/* <select multiple={true} value={['B', 'C']}/> */}

      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    <hr/>
    {/* <Category newFName={fName}  newLName={lName} newMessage={message} newCategory={user}/> */}
    <Category newUser={cur_state} shouldUpdate={count}/>
    </>
  );
}

