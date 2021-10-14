import React from "react";

const input1=React.createElement('input',{defaultValue:"enter here"})
const input2=React.createElement('input',{defaultValue:"enter here"})

const submitButton=React.createElement('button',null,"Submit")
const form=React.createElement('div',{},input1,input2,submitButton)

export default form