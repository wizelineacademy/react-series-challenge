import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <h5>Pagina no encontrada.</h5>
        <div>
          <Link to="/">Regresar a inicio.</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;