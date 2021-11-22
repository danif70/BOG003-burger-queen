import React, { Fragment, useState } from "react";
import "../Styles/ModalBurger.css"


const ModalBurger = ({ showModal, setShowModal, dataModal, onAdd }) => {

  const [proteinType, setProteinType] = useState('') //
  const [addPriceExtra, setAddPriceExtra] = useState([])
  const [addExtra, setAddExtra] = useState([])

  const TypeExtra = Object.keys(dataModal.extras) // huevo y queso
  const PriceExtra = Object.values(dataModal.extras) //precio de huevo y queso

  const handleReset=()=>{
    setProteinType('')
    setAddPriceExtra([])
    setAddExtra([])
  }

  return (
    <Fragment>

      {showModal ? (<div className="container-modal" >
        <button
          className="btn-exit-modal"
          onClick={() => {
            setShowModal((exit) => exit === false)
            handleReset()
          }}
        >
          X
        </button>

        <p>{dataModal.name}</p>
        {dataModal.protein.map((item) => (
        
          <label key={item}>
            <input
              type='radio'
              value={item}
              name='protein'
              onChange={() => setProteinType(item)
              }
            />
            {item}
          </label>
         ))}

        {TypeExtra.map((item, index) => (
          <label key={item}>
            <input
              type='checkbox'
              value={item[index]}
              name={item}
              onChange={(e) => {
                setAddExtra([...addExtra, e.target.name]); setAddPriceExtra([...addPriceExtra, parseInt(PriceExtra[index])])
                console.log('index', index)
              }
              }
            />
            {item}  $ {PriceExtra[index]}

          </label>
          
        ))}
        <button className="btn-cards btn-warning w-50 "
          type="submit"
          onClick={() => { onAdd({ name: dataModal.name + ' ' + proteinType + ' ' + addExtra, price: parseInt(dataModal.price) + addPriceExtra.reduce((previousValue, currentValue) => previousValue + currentValue, 0), id:dataModal.id + proteinType + addPriceExtra,
          }
          )  
          setShowModal((exit) => exit === false) 
          handleReset()
          }}
        >AGREGAR</button>
      </div>) : (null)
      }

    </Fragment>
  );
};
export { ModalBurger };