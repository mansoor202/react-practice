import React from "react";
import axios from "axios";

class List extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        users: [],
      };
    }
  }

   showList=async()=>{
      const res=await fetch('https://api.github.com/users')
      const data =await res.json();
      console.log(data)
      this.setState({users:data})

      return(
          <div>
              {this.state.users.map(user=>{
                  <p key={user.id}>{user.login}</p>
              })}
          </div>
      )
    
  }


  componentDidMount() {
 
   this.showList()
}
  render() {
    return <div>
        {
            this.state.users.map(user=>{
                return (
                <p>{user.login}</p>
                )
            })
        }
    </div>
  }
}

export default List;
