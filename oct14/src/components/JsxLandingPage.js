import React from "react";
import Calculator from "./Calculator/Calculator";
import form from "./LoginPage/LoginPage";
import ClassCalculator from "../components/ClassComponents/Calculator";
import AuthClassComp from "./ConditionalRenders/AuthClassComp";
function WelcomeNote() {
  return <>
    <AuthClassComp/>
  
</>;
}

export default WelcomeNote;
