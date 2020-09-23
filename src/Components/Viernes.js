import React, { Component } from "react";

export default class Viernes extends Component {
  render() {
    return (
      <div>
        <div className="card-group m-2">
          <div className="card col-md-3 m-1">
            <p className="h2 text-center">60</p>
            <div className="card-body">
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Salida"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Entrada"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Ps-vendidas"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="D-vendido"
              />
            </div>
          </div>
          <div className="card col-md-3 m-1">
            <p className="h2 text-center">75</p>
            <div className="card-body">
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Salida"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Entrada"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Ps-vendidas"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="D-vendido"
              />
            </div>
          </div>
          <div className="card col-md-3 m-1">
            <p className="h2 text-center">100</p>
            <div className="card-body">
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Salida"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Entrada"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Ps-vendidas"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="D-vendido"
              />
            </div>
          </div>
          <div className="card col-md-3 m-1">
            <p className="h2 text-center">Dias De La Semana</p>
            <div className="card-body">
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Lunes"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Martes"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Miercoles"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Jueves"
              />
              <input
                type="text"
                className="form-control m-1 text-center"
                placeholder="Viernes"
              />
            </div>
          </div>
        </div>
        <div className="row p-3 col-md-3">
          <input
            type="text"
            className="form-control m-1 text-center"
            placeholder="Entrega"
          />
          <input
            type="text"
            className="form-control m-1 text-center"
            placeholder="Vendido"
          />
          <input
            type="text"
            className="form-control m-1 text-center"
            placeholder="Final"
          />
        </div>
        <div className="row p-3 col-md-3">
          <button className="btn btn-primary m-2">Sumar</button>
          <button className="btn btn-warning m-2">Imprimir</button>
        </div>
      </div>
    );
  }
}
