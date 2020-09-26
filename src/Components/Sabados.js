import Axios from 'axios'
import React, { Component } from 'react'

export default class Domingos extends Component {


  state = {
    value1: '',
    value2: '',
    sabado:[]
  }




  sabados = (e) => {
    
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  p = async (event) => {
   await event.preventDefault()
    this.setState({
      sabado :  {
        y:parseFloat(this.state.value1),
        x:parseFloat(this.state.value2),
        
      }
    })
    
  }

  enviar =async (event)=>{
   await event.preventDefault()
      const b = this.state.sabado;
     await Axios.get('http://localhost:4000/user',b)
  }
 

  render() {
    return (
      <form onChange={this.p} >
      <div className="row p-5">
        <div className="col-sm-6 p-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title oja2 ">75</h5>
              <input type="text" className="form-control text-center" name='value1' onChange={this.sabados} />
            </div>
          </div>
        </div>
        <div className="col-sm-6 p-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title oja">100</h5>
              <input type="text" className="form-control text-center" name='value2' onChange={this.sabados} />
            </div>
          </div>
        </div>
        <button type='submit' 
        className="btn btn-primary btn-lg btn-block m-5"
        onClick={this.enviar}
        >
          guardar</button>
      </div>
      </form>
    )
  }
}
