import React, { Fragment, useState } from "react";
import "../Styles/ModalBurger.css"

const ModalBurger = ({ showModal, dataModal }) => {
  const [proteinType, setProteinType] = useState('')
  const [addExtra, setAddExtra] = useState([])
  const [addPriceExtra, setAddPriceExtra] = useState(0)
  const TypeExtra = Object.keys(dataModal.extras)
  const PriceExtra = Object.values(dataModal.extras)
  console.log('data de modal', dataModal)
  console.log('precios extras ', PriceExtra)
  return (
    <Fragment>
      {showModal ? (<div className="container-modal" >
        <p>{dataModal.name}</p>
        {dataModal.protein.map((item) => (
          <label key={item}>
            <input
              type='radio'
              value={item}
              name='protein'
              onChange={() => setProteinType(item)}
            />
           {/*  {console.log('la proteina escogida', dataModal.name, proteinType)} */}
            {item}
          </label>))}

        {TypeExtra.map((item)=> (
          <label key={item}>
            <input
            type='checkbox'
            value={item}
            name={item}
            onChange={(e) => setAddExtra([...addExtra, e.currentTarget.name])
            /* console.log([...addExtra, e.currentTarget.name]) */}
            />
            {item}
            {PriceExtra[0]}
          </label>
        ))}
      </div>) : (null)
      }
    </Fragment>
  );
};
export { ModalBurger };