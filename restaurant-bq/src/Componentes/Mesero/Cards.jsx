import React, { useState } from "react";
import "../Styles/Cards.css";
import { ModalBurger } from "./ModalBurger";

const Cards = ({ dataProduct, onAdd}) => {
  const [showModal, setShowModal] = useState(false);
  
  // setOrder, order,
  //  const handleOrder = () => {
  //   setOrder([...order, dataProduct])
  //   console.log(order)
  //  }

  return (
    <div
      className="card-container text-center col-sm-2 card bg-light mb-3"
      key={dataProduct.id}
    >
      <div className="card-header">{dataProduct.name}</div>
      <div className="card-body">
        <p className="card-text">$ {dataProduct.price}</p>
        <img className="img-cards" src={dataProduct.image}></img>
        <div>
          {dataProduct.submenu === "Burger" ? (
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="btn-cards btn-warning w-50 "
                type="button"
              >
                OPCIONES
              </button>
              <ModalBurger 
              showModal={showModal}
              setShowModal={setShowModal} 
              dataModal={dataProduct} 
              onAdd={ onAdd}
              order={onAdd}
              setShowModal={setShowModal}
              />
            </div>
          ) : (
            <div>
              <button
                onClick={() => onAdd(dataProduct)}
                className="btn-cards btn-warning w-50 "
                type="submit"
              >
                AGREGAR
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Cards };
