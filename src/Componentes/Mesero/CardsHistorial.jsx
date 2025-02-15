import React, { Fragment, useEffect, useState } from "react";
import "../Styles/CardsHistorial.css";
import { db } from "../../Firebase/firebase.js";
import { doc, updateDoc } from "firebase/firestore";

const CardsHistorial = ({ oneHistorial }) => {
  const [estado3, setEstado3] = useState(oneHistorial.state);
  //console.log(estado3);

  const actualizarArchived = async (state) => {
    await updateDoc(doc(db, "orders", oneHistorial.id), {
      state: state,
    });
    setEstado3(state);
  };

  return (
    <Fragment>
      {oneHistorial.state === "ENTREGADO" ? (
        <div
          className="cards-historial text-center col-sm-2 card bg-light mb-3
      overflow-auto"
        >
          <div className="card-header header-historial">
            <p>{oneHistorial.client}</p>
            <p> Tiempo: {oneHistorial.preparationTime}</p>
          </div>
          <div className="item-qty-historial overflow-auto">
            <ul className="list-order-historial">
              ITEM
              {oneHistorial.item.map((item) => (
                <li className="li-items-historial" key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
            <ul className="list-order-historial">
              CANTIDAD
              {oneHistorial.item.map((qty) => (
                <li className="li-qty-historial" key={qty.id}>
                  {qty.qty}
                </li>
              ))}
            </ul>
            <ul className="list-order-historial">
              PRECIO
              {oneHistorial.item.map((price) => (
                <li className="li-qty-historial" key={price.id}>
                  $ {price.price}
                </li>
              ))}
            </ul>
          </div>
          <span className="line">_____________________________</span>
          <div className="total">
            <p>TOTAL $ {oneHistorial.totalPrice}</p>
            <button
              className="btn-card-historial btn-warning"
              type="submit"
              onClick={() => actualizarArchived("ARCHIVADO")}
            >
              {estado3}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};
export { CardsHistorial };
