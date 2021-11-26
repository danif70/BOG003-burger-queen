import React, { Fragment, useState } from "react";
import "../Styles/ModalBurger.css";
import Exit from "../Imagenes/exit.png";
const ModalBurger = ({ showModal, dataModal, onAdd, setShowModal }) => {
  const [proteinType, setProteinType] = useState(""); //
  const [addPriceExtra, setAddPriceExtra] = useState([]);
  const [addExtra, setAddExtra] = useState([]);
  //  let price = order.reduce(
  //   (price, items) => price + items.qty * items.price,
  //   0
  // );
  const TypeExtra = Object.keys(dataModal.extras); // huevo y queso
  const PriceExtra = Object.values(dataModal.extras); //precio de huevo y queso
  // console.log(PriceExtra);
  //s  console.log('data de modal', dataModal)
  //console.log('precios extras ', PriceExtra) //PriceExtra entras a los valores del objeto extra
  const handleReset = () => {
    setProteinType("");
    setAddPriceExtra([]);
    setAddExtra([]);
  };
  return (
    <Fragment>
      {showModal ? (
        <div className="background-modal">
          <div className="container-modal text-center col-sm-2 card  mb-3">
            <div className="modal-header card-header">
              <img
                className="btn-exit"
                src={Exit}
                alt="exit"
                onClick={() => {
                  setShowModal(false);
                  handleReset();
                }}
              />
              <p>{dataModal.name}</p>
            </div>
            <div className="container-protein">
              {dataModal.protein.map((item) => (
                <label key={item}>
                  <input
                    type="radio"
                    value={item}
                    name="protein"
                    onChange={
                      () => setProteinType(item)
                      //console.log(e.target.value)
                    }
                  />
                  {item}
                </label>
              ))}
            </div>
            <div><p>ADICIONALES</p></div>
            <div>
            {TypeExtra.map((item, index) => (
              <label key={item}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item[index]}
                  name={item}
                  onChange={(e) => {
                    setAddExtra([...addExtra, e.target.name]);
                    setAddPriceExtra([
                      ...addPriceExtra,
                      parseInt(PriceExtra[index]),
                    ]);
                  }}
                />
                {/* {e.target.reset()} */}
                {item} $ {PriceExtra[index]}
              </label>
            ))}
            </div>
            <button
              className="btn-cards btn-warning w-50 "
              type="submit"
              onClick={() => {
                onAdd({
                  name: dataModal.name + " " + proteinType + " " + addExtra,
                  price:
                    parseInt(dataModal.price) +
                    addPriceExtra.reduce(
                      (previousValue, currentValue) =>
                        previousValue + currentValue,
                      0
                    ),
                  id: dataModal.id + proteinType + addPriceExtra,
                });
                setShowModal(false);
                handleReset();
              }}
            >
              AGREGAR
            </button>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
export { ModalBurger };
