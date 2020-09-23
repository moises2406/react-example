import React, { Component } from "react";

export default class Lunes extends Component {
  render() {
    return (
      <div className="p-5">
        <div className="card p-4">
          <div className="row">
            <div className="col-5">
              <h5 className="card-title oja2 ">60</h5>
              <input type="text" className="form-control text-center" />
            </div>
            <div className="col-5">
              <h5 className="card-title oja2 ">75</h5>
              <input type="text" className="form-control text-center" />
            </div>
            <div className="col">
              <h5 className="card-title oja2 ">100</h5>
              <input type="text" className="form-control text-center" />
            </div>
          </div>
        </div>

        <div className="col m-5"></div>
        <div className="col">
          <button type="button" className="btn btn-primary btn-lg btn-block ">
            guardar
          </button>
        </div>
      </div>
    );
  }
}
