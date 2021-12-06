import React, { Fragment, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import "../Styles/Cocina.css";
import { OrdenCocina } from "./OrdenCocina"
import { db } from "../../Firebase/firebase.js";
import { collection, query, onSnapshot } from "firebase/firestore";


const Cocina = () => {
  const [stateOrder, setstateOrder] = useState([]);
  const getCollection = () => {
    const docSnap = query(collection(db, "orders"));
    onSnapshot(docSnap, (snapshot) => {
      setstateOrder(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      // console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <Fragment>
      <div className="container-cooker vh-100 ">
      <div>
        <Header className="hder-cooker" />
      </div>
      <div className="container-card-cooker overflow-auto row row-cols-1 row-cols-md-2 g-4 overflow-auto">
          {stateOrder.map((oneOrder) => (
            <OrdenCocina
              key={oneOrder.id}
              oneOrder = {oneOrder}
            />
          ))}
          </div>
        </div>
    </Fragment>
  );
};

export { Cocina };
