import React, { Component } from 'react'
import image from './jack.webp'

 
  class App extends Component{
  state ={fullName:'Jack Ma',
 bio:'	business magnat einvestor philanthropist',
 profession:'	Co-founder Alibaba Group',
}
 appear =() =>{
   this.setState({
    fullName:'Jeff Bezos',
    bio:'	an American business magnate, media proprietor, and investor.',
    profession:'	Co-founder amazon Group',
   
  
  }

   )
 }
 
  render(){

    return (

      <div>
      <button onClick={this.appear}>toggles</button>
      <p>{this.state.fullName} </p>
      <p>{this.state.bio} </p>
      <p> {this.state.profession}</p>
      </div>
        
    );

  }
  
  
  
   
  
 
}

export default App;
