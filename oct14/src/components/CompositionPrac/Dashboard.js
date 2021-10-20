import { MessageBox } from "./MessageBox";
import { TextMessage } from "./TextMessage";
import { FileSendingComponent } from "./FileSendingCompo";
import { useState } from "react";
export function Dashboard() {
  const [choice, setChoice] = useState("txtMessage");

  const changeChoice = (e) => {
    setChoice(e.target.value);
  };
  return (
    <>
      <select value={choice} onChange={changeChoice}>
        <option value="txtMessage">Send Text Message</option>
        <option value="sendFile">Send File</option>
      </select>
      {choice == "txtMessage" ? <MessageBox box={<TextMessage/>}/> : <MessageBox box={<FileSendingComponent/>}/>}
    </>
  );
}
