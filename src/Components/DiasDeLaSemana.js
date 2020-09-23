import React, { Component } from "react";

export default class DiasDeLaSemana extends Component {
  render() {
    return (
      <div className="cols-2 m-5">
        <div className="card">
          <div className="card-body">
            <div className="card-header">
              <h5 className="card-title text-center">dias</h5>
            </div>
            <div className="row">
              <input type="text" className="form-control text-center" />
              <input type="text" className="form-control text-center" />
              <input type="text" className="form-control text-center" />
              <input type="text" className="form-control text-center" />
              <input type="text" className="form-control text-center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
