import React, { Fragment, useState } from "react";
import "../Styles/ModalBurger.css"


const ModalBurger = ({ showModal, dataModal, onAdd}) => {
  const [proteinType, setProteinType] = useState('') //
  const [addPriceExtra, setAddPriceExtra] = useState([])
  const [addExtra, setAddExtra] = useState([])
  //  let price = order.reduce(
  //   (price, items) => price + items.qty * items.price,
  //   0
  // );
 

  const TypeExtra = Object.keys(dataModal.extras) // huevo y queso
  const PriceExtra = Object.values(dataModal.extras) //precio de huevo y queso
  console.log(PriceExtra);


//s  console.log('data de modal', dataModal)
  //console.log('precios extras ', PriceExtra) //PriceExtra entras a los valores del objeto extra


  return (
    <Fragment>
      {showModal ? 
      (<div className="container-modal" >
        <p>{dataModal.name}</p>
        {dataModal.protein.map((item) => (
          <label key={item}>
            <input
              type='radio'
              value={item}
              name='protein'
             onChange={() =>  setProteinType(item)
               //console.log(e.target.value)
              }
            />
            {item} 
          </label>))}

        {TypeExtra.map((item, index)=> (
          <label key={item}>
            <input
            type='checkbox'
            value={item[index]}
            name={item}
             onChange={(e) =>{setAddExtra([...addExtra, e.target.name]); setAddPriceExtra([...addPriceExtra, parseInt(e.target.value)])
             // console.log([...addExtra, e.target.name]); console.log([...addPriceExtra, parseInt(e.target.value)])
            }
             }
            />
            {item}  $ {PriceExtra}
      
          </label>
        ))}
        <button className="btn-cards btn-warning w-50 "
                type="submit"
                onClick={() => onAdd({name: dataModal.name + proteinType + ' Con ' + addExtra,  price: parseInt(dataModal.price) + addPriceExtra.reduce((previousValue, currentValue) => previousValue + currentValue, 0)})}
             >AGREGAR</button>
      </div>) : (null)
      
      }
      
    </Fragment>
  );
};
export { ModalBurger };

//addPriceExtra.reduce((c)=> c, c)
//onAdd={onAdd} onRemove={onRemove} order={order} 