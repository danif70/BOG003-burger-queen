import React, { Fragment, useState } from "react";
import "../Styles/ResumenPedido.css";

const ResumenPedido = ({ order, onAdd, onRemove, onRemoveAll }) => {
  const totalPrice = order.reduce(
    (price, items) => price + items.qty * items.price,
    0
  );

  const [count, setCount] = useState(1);
  const [client, setClient] = useState("");

  return (
    <Fragment>
      <div>
        <h2>Cliente</h2>
        <input type="text" client={client} onChange={(e) => {console.log(e.target.value)}}/>
        <p> Numero de Pedido: {count}</p>

        {order.length === 0 && <div>ORDEN VACÍA</div>} 
        {/* renderizado condicional && = entonces */}
      </div>

      <div className="container-order2 overflow-auto row row-cols-1 row-cols-md-2 g-4  overflow-auto">
        {order.map((item) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <button onClick={() => onAdd(item)}>+</button>
            <button onClick={() => onRemove(item)}>-</button>
             <button onClick={() => onRemoveAll(item)}>Eliminar todo</button> 

            <div>
              {item.qty} $ {item.price* item.qty}
              {/* {console.log(item.qty, parseInt(item.price))}  */}
            </div>
          </div>
        ))}
        <div>
          TOTAL $ {totalPrice}
        </div>
        <div>
        <button type="submit" 
        className="btn-cards btn-warning w-50 "
        onClick={() => setCount(count+1)}>ENVIAR PEDIDO</button>
        </div>
      </div>
      {/* {console.log('desde ResumenPedido', order)} */}
    </Fragment>
  );
};
export { ResumenPedido };
