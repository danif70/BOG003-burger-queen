import React, { Fragment, useState } from "react";
import "../Styles/ModalBurger.css";

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
        <div className="container-modal">
          <button
            className="btn-exit-modal"
            onClick={() => {
              setShowModal(false);
              handleReset()
            }}
          >
            X
          </button>
          <p>{dataModal.name}</p>
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

          {TypeExtra.map((item, index) => (
            <label key={item}>
              <input
                type="checkbox"
                value={item[index]}
                name={item}
                onChange={(e) => {
                  setAddExtra([...addExtra, e.target.name]);
                  setAddPriceExtra([
                    ...addPriceExtra,
                    parseInt(PriceExtra[index]),
                  ]);

                  // console.log([...addExtra, e.target.name]); console.log([...addPriceExtra, parseInt(e.target.value)])
                  //onRemove([e.target.name, e.target.value])
                }}
              />
              {/* {e.target.reset()} */}
              {item} $ {PriceExtra[index]}
            </label>
          ))}
          <button
            className="btn-cards btn-warning w-50 "
            type="submit"
            onClick={() => {
              onAdd({
                name: dataModal.name + ' ' + proteinType + ' ' + addExtra,
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
      ) : null}
    </Fragment>
  );
};
export { ModalBurger };


