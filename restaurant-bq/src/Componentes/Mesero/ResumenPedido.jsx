import React, { Fragment } from "react";
import "../Styles/ResumenPedido.css";

const ResumenPedido = ({ order, onAdd, onRemove }) => {
  const totalPrice = order.reduce(
    (price, items) => price + items.qty * items.price,
    0
  );
  
console.log('soy ',  order);
  return (
    <Fragment>
      <div>
        <h2>Cliente</h2>
        <input type="text" />
        <ul>
          <li>ITEM</li>
          <li>CANTIDAD</li>
          <li>PRECIO</li>
        </ul>
      </div>

      <div className="container-order2 overflow-auto row row-cols-1 row-cols-md-2 g-4  overflow-auto">
        {order.map((item) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <button onClick={() => onAdd(item)}>+</button>
            <button onClick={() => onRemove(item)}>-</button>
            <div>
              {item.qty} $ {item.price}
              {console.log(item.qty, parseInt(item.price))} 
            </div>
          </div>
        ))}
        <div>
          TOTAL $ {totalPrice}
        </div>
      </div>
      {/* {console.log('desde ResumenPedido', order)} */}
    </Fragment>
  );
};
export { ResumenPedido };
