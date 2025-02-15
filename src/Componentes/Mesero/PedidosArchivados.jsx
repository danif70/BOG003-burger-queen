import React, { Fragment, useState } from "react";
import "../Styles/PedidosArchivados.css";
import check from "../Imagenes/check.png";

const OrderArchived = ({ oneArchived }) => {
  return (
    <Fragment>
     
      {oneArchived.state === "ARCHIVADO" ? (
        <div className="card-archived">
          <img src={check} alt="check" className="check" />
          <p className="item-archived" >{oneArchived.preparationTime} </p>
          <p className="item-archived" >{oneArchived.client} </p>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export { OrderArchived };
