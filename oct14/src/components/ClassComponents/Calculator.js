import React,{Component} from "react";


class Calculator extends Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.name,
            value1:0,
            value2:0,
            sum:0

        }
    }

    changeHandler1=(e)=>{
        this.setState(
            {value1:e.target.value}
            
        )
       
    }
    changeHandler2=(e)=>{
        this.setState(
            {value2:e.target.value}
        )
    }

    handleSubmit=()=>{
        this.setState({sum:(+this.state.value1)+(+this.state.value2)})
       
    }

    shouldComponentUpdate(nextProps, nextState) {  
        if (this.state.sum === nextState.sum) {  
        return false;  
        }  
        return true;  
        }  
    componentDidUpdate(){
        console.log("component updated")
       
    }

    render(){
        return(
            <>
            <div><h2>{this.state.name}</h2></div>
            <p>value1: {this.state.value1}</p>
            <p>value2: {this.state.value2}</p>
            <h2>sum: {this.state.sum}</h2>

            <input placeholder="enter first value here" onChange={this.changeHandler1}/><br/>
            <input placeholder="enter 2nd value here" onChange={this.changeHandler2}/><br/>
            <button onClick={this.handleSubmit}>Add the Result</button>
            </>
        )
    }

}

export default Calculator;