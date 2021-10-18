import { fireEvent, logDOM } from "@testing-library/dom";
import React, { useEffect, useState } from "react";

export function RegisterationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);

  const changeFName = (e) => {
    setFName(e.target.value);
  };
  const changeLName = (e) => {
    setLName(e.target.value);
  };

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };
  const changeUser = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Dear ${user}, ${fName} ${lName},we have received from you\n ${message}`);
    setCount((count) => setCount(count + 1));
  };

  useEffect(() => {
    console.log("component updated");
  }, [count]);

  return (
    <div>
      <h2>RegisterationForm</h2>

      <input placeholder="First Name" value={fName} onChange={changeFName} />
      <br />
      <br />

      <input placeholder="lastName" value={lName} onChange={changeLName} />
      <br />
      <br />
      <textarea
        placeholder="start writing here "
        value={message}
        onChange={changeMessage}
      ></textarea>
      <br />
      <br />
      <select value={user} onChange={changeUser}>
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
  );
}
