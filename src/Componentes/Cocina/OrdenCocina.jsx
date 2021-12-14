import React, { Fragment, useEffect, useState } from "react";
import watch from "../Imagenes/reloj.png";
import "../Styles/OrdenCocina.css";
//import {Historial} from "./Historial";
import { db } from "../../Firebase/firebase.js";
import { collection, updateDoc, doc } from "firebase/firestore";

const OrdenCocina = ({ oneOrder }) => {
  const [estado2, setEstado2] = useState(oneOrder.state);
  const [finalTime2, setFinalTime2] = useState(oneOrder.preparationTime);

  const actualizar = async (state) => {
    setFinalTime2(msToTime(final));
    await updateDoc(doc(db, "orders", oneOrder.id), {
      state: state,
      preparationTime: msToTime(final),
    });
    setEstado2(state);
  };

  let date = new Date(),
    currentDate = Date.parse(date),
    final = currentDate - oneOrder.dateInitial;
   const orderDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
   

  let msToTime = (final) => {
    let seconds = Math.floor((final / 1000) % 60),
      minutes = Math.floor((final / (1000 * 60)) % 60),
      hours = Math.floor((final / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  };

  // console.log(msToTime(final));

  return (
    <Fragment>
      {oneOrder.state === "LISTO" ? (
        <div
          className="cards-cooker text-center col-sm-2 card bg-light mb-3
      overflow-auto"
        >
          <div className="card-header header-cooker">
            <p>{oneOrder.client}</p>
            <p>{orderDate}</p>
          </div>
          <div className="item-qty overflow-auto ">
            <ul className="list-order">
              ITEM
              {oneOrder.item.map((item) => (
                <li className="li-items" key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
            <ul className="list-order">
              CANTIDAD
              {oneOrder.item.map((qty) => (
                <li className="li-qty" key={qty.id}>
                  {qty.qty}
                </li>
              ))}
            </ul>
          </div>
          <footer className="footer-cards-cooker">
            <button
              onClick={() => {
                actualizar("ENTREGADO");
              }}
              className="btn-card-cooker btn-warning"
              type="submit"
            >
              {estado2}
            </button>
          </footer>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export { OrdenCocina };
