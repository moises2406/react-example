import React, { Component } from 'react'

export default class Domingos extends Component {
    render() {
        return (
            <div className="row p-5">
            <div className="col-sm-6 p-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title oja2 ">75</h5>
                  <input type="text" className="form-control text-center" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title oja">100</h5>
                  <input type="text" className="form-control text-center" />
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block m-5">guardar</button>
          </div>
        )
    }
}
