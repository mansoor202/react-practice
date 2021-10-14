import React from 'react'
import './LoginPage.css'
const input1 = React.createElement('input', {defaultValue:"enter first value here"});
const input2 = React.createElement('input', {defaultValue:"enter second value here"})
const submitButton=React.createElement('button',null,"submit")
const form=React.createElement('div',{classNa:"inputForm"},input1,input2,submitButton)

export default form