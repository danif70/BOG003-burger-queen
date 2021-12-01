import React, { Fragment, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import "../Styles/Cocina.css";
import { db } from "../../Firebase/firebase.js";
import { collection, query, onSnapshot } from "firebase/firestore";
import watch from '../Imagenes/reloj.png'

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
            <div
              key={oneOrder.id}
              className="cards-cooker text-center col-sm-2 card bg-light mb-3 overflow-auto"
            >
              <div className="card-header header-cooker">
                <p>{oneOrder.client}</p>
                <p>{oneOrder.numOrder}</p>
              </div>
              <div className="item-qty">
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
              <div className="footer-cards-cooker">
                <div className='chronometer'>
               <img className='watch-cooker' src={watch} alt="watch"/><p>CRONOMETRO</p>
               </div>
                <button className="btn-card-cooker btn-warning  " type="submit">
                  LISTO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export { Cocina };
