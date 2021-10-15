import React from "react";
import axios from "axios";

class List extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        users: [],
        listItems:[]
      };
    }
  }

   showList=async()=>{
      const res=await fetch('https://api.github.com/users')
      const data =await res.json();
      console.log(data)
      this.setState({users:data})
        this.setState({listItems:this.state.users.map(user=>{
            return (
            <li>{user.login}</li>
            )
        })})
     

    
  }


  componentDidMount() {

   
 
   this.showList()
}
  render() {
    return <div>
        {
            <ul>{this.state.listItems}</ul>
            
        }
    </div>
  }
}

export default List;
