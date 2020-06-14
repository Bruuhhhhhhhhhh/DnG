import React, { Component } from 'react';
import '../App.css';

export class Login extends Component{
  state={
    name:'',
    password:'',

  }
  OnSubmit= e =>{e.preventDefault(); console.log("Form confirmed",this.state.name);}
  render()
  {
    return(
    <div>
    <form>
      <input  placeholder='name' value={this.state.name} onChange={e=>this.setState({name: e.target.value})}/>
      <input  placeholder='password' value={this.state.password} onChange={e=>this.setState({password: e.target.value})}/>
    <button onClick={e=>this.onSubmit(e)}>Confirm</button>
    </form>
    </div>
    );
  }
}

export default Login;
