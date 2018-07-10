import React from "react";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No se encontro una ruta válida para <code>{location.pathname}</code>
    </h3>
  </div>
);

export default NoMatch;
