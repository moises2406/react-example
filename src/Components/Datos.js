import React, { Component } from "react";

export default class Datos extends Component {
  render() {
    return (
      <div className="m-3">
        <div className="card p-4 m-2">

          <div className="row">
            <div className="col">
              <h5 className="card-title oja2 ">75</h5>
              <input type="text" className="form-control text-center m-2" />
              <input type="text" className="form-control text-center m-2" />
            </div>
            <div className="col">
              <h5 className="card-title oja2 ">100</h5>
              <input type="text" className="form-control text-center m-2" />
              <input type="text" className="form-control text-center m-2" />
            </div>
          </div>
        
        </div>
        <div className="col">
              <input type="text" className="form-control text-center m-2" />
              
            </div>

        <div className="card  m-2">
          <div className="card-header">name</div>
          <div className="container">
            <div className="row">
              <div className="card-body">
                <h5 className="card-title text-center">100</h5>
                <p className="card-text text-center">1235</p>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">100</h5>
                <p className="card-text text-center">1235</p>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">100</h5>
                <p className="card-text text-center">1235</p>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    );
  }
}
