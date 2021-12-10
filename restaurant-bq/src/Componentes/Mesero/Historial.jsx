import React, { Fragment, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { CardsHistorial } from "./CardsHistorial";
import "../Styles/Historial.css";
import { db } from "../../Firebase/firebase.js";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const Historial = () => {
  const [stateHistorial, setStateHistorial] = useState([]);

  const getCollection = () => {
    const docSnap = query(collection(db, "orders"));
    onSnapshot(docSnap, (snapshot) => {
      setStateHistorial(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  };
  useEffect(() => {
    getCollection();
  }, []);

  console.log();

  return (
    <Fragment>
      <div className="container-historial vh-100 ">
        <div>
          <Header />
        </div>
        <div className="container-historial-cards overflow-auto row row-cols-1 row-cols-md-2 g-4 overflow-auto">
          {stateHistorial.map((oneHistorial) =>
            oneHistorial.state === "ENTREGADO" ? (
              <CardsHistorial
                key={oneHistorial.id}
                oneHistorial={oneHistorial}
              />
            ) : (
              ""
            )
          )}
        </div>
        <div className='container-archived'>HOLA</div>
      </div>
    </Fragment>
  );
};
export { Historial };
