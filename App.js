import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import SideNav from "./sidenav.js"
import Post from "./Post.js"



class App extends React.Component {
  state={fed:[]}


feeds =(value)=>{


this.setState({
  fed:[...this.state.fed,value]


})
}


render(){
    return(
  <div>
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Home</span>
</nav>
<SideNav feeds={this.feeds}/>
<Post  P={this.state} Likes={this.Likes} />

  </div> );
}

}

export default App;