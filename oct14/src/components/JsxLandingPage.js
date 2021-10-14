import React  from "react";
import Calculator from '../components/Calculator/Calculator'
import form from "./LoginPage/LoginPage";

const LoginPage2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'React.create element'
  );

function WelcomeNote(){
    return (
        <>
        
        <div>Welocome to Focusteck</div>
        {form}
        
        </>
    )
}

export default WelcomeNote