import React, { Component } from "react";

export default class Datos extends Component {
  render() {
    return (
      <div className="m-3">
        <div className="card p-4 m-2">

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
                                <div class="form-group">
                                    <input type="password" class="form-control" name="password" placeholder="Password" />
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
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
                                    <input type="email" className="form-control " name="email" placeholder="Email"  />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password" />
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
        <div className="col-md-4 mx-auto">
                    <div className="card mt-4 text-center">
                        
                        <div className="card-body">
                            
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email" autofocus />
                                </div>
                                
                                
                           
                        </div>
                    </div>
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
