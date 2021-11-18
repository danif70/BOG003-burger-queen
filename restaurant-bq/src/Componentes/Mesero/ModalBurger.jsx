import React, { Fragment, useState } from "react";
import "../Styles/ModalBurger.css"


const ModalBurger = ({ showModal, dataModal }) => {
  const [proteinType, setProteinType] = useState('')
  const TypeExtra = Object.keys(dataModal.extras)

  console.log('data de modal', dataModal)
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
            {console.log('la proteina escogida', dataModal.name, proteinType)}
            {item}
          </label>))}

        {TypeExtra}
      </div>) : (null)
      }
      {console.log(TypeExtra)}

    </Fragment>
  );
};
export { ModalBurger };