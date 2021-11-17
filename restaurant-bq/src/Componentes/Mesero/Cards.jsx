import React from "react";
import "../Styles/Cards.css";

const Cards = ({ dataProduct, onAdd }) => {
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
          <button
            onClick={() => onAdd(dataProduct)}
            //    () => {
            //  setOrder([...order, dataProduct]);
            //  console.log([...order, dataProduct]);
            //  }}
            className="btn-cards btn-warning w-50 "
            type="submit"
          >
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export { Cards };
