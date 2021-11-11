import React, { useState, Fragment, useEffect } from "react";
import { Header } from "../Header/Header";
import { BtnMenu } from "../BotonesMenu/Botonesmenu";
import "./Mesero.css";

const Mesero = () => {
 
const [data, setDataBf] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("data2.json")
      .then(data => data.json())
      // .then((data) => setDataBf(data))
      .then(data=> console.log(data))
  };

  return (
    <Fragment>
      <div className="container-waiter vh-100">
        <Header />
        <BtnMenu  />
      </div>
    </Fragment>
  );
};
export { Mesero };
