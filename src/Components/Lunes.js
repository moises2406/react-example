import React, { Component } from "react";

export default class Lunes extends Component {


  


  render() {
    return (

      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card mt-4 text-center">
            <div className="card-header">
              <h1 className="h4">
                Account Login
              </h1>
            </div>
            <div className="card-body">
              <form >
                <div className="form-group">
                  <input type="email" className="form-control" name="email" placeholder="Email" autofocus />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password" placeholder="Password" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password" placeholder="Password" />
                </div>
                <div className="form-group ">
                  <input type="password" className="form-control" name="password" placeholder="Password" />
                </div>
                <button className="btn btn-primary btn-block">
                  Signin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
