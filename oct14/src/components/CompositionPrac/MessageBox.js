import { useState } from "react";

import { TextMessage } from "./TextMessage";
import { FileSendingComponent } from "./FileSendingCompo";
export function MessageBox(props) {
  

  return (
    <div>
      
      <p>MessageBox rendered</p>
     
      {props.box}
    </div>
  );
}
