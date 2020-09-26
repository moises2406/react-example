import React, { Component } from "react";

export default class DiasDeLaSemana extends Component {
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
                  <input type='text' className="form-control" name="email" placeholder="Email" autofocus />
                </div>
                <div className="form-group">
                  <input type='text' className="form-control" name="email" placeholder="Email" autofocus />
                </div>
                <div className="form-group">
                  <input type='text' className="form-control" name="email" placeholder="Email" autofocus />
                </div>
                <div className="form-group">
                  <input type='text' className="form-control" name="email" placeholder="Email" autofocus />
                </div>
                <div className="form-group">
                  <input type='text' className="form-control" name="email" placeholder="Email" autofocus />
                </div>
                
                <button className="btn btn-primary btn-block">
                  Signin
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
