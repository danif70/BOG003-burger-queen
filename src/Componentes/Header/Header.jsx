import React, { useState, useEffect, Fragment } from "react";
import Logo from "../Imagenes/logo.png";
import AddImg from "../Imagenes/boton-mas.png";
import Bell from "../Imagenes/campana.png";
import HomeImg from "../Imagenes/casa.png";
import "../Styles/Header.css";
import { db } from "../../Firebase/firebase.js";
import { collection, query, onSnapshot } from "firebase/firestore";

const Header = () => {
  const [stateNotification, setStateNotification] = useState([]);
  // const notificationArray = [0]

  /* const acumulator = () => {
    const addNotification = () => notificationArray.push('x')
    const number = notificationArray.length 
    return number} */

  // let itemNot = 0;

  // const reducer = (previousValue, currentValue) => previousValue + currentValue;

  const getNotification = () => {
    const docSnap = query(collection(db, "orders"));
    onSnapshot(docSnap, (snapshot) => {
      setStateNotification(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  };
  useEffect(() => {
    getNotification();
  }, []);

  const notification = () => {
    let sum = [];
    stateNotification.map((item) => {
      if (item.state === "ENTREGADO") {
        sum.push(1);
      }
    });
    return sum.length;
  };

  //console.log('notification', stateNotification)
  return (
    <Fragment>
      <header className="container-hdr">
        <img className="logo-hdr" src={Logo} />
        <div className="icons-container">
          <a className="a-add " href="/mesero">
            <img className="add-sign add" src={AddImg} />
          </a>
          <a className="a-add " href="/historial ">
            <img className="bell" src={Bell} />
            <span className="notification top-0 start-100 translate-middle badge rounded-pill bg-danger">{notification()}</span>
          </a>
          <a className="a-add " href="/">
            <img className="little-house" src={HomeImg} />
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export { Header };
