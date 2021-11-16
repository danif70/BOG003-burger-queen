import React, { Fragment } from 'react';
import '../Styles/ResumenPedido.css'


const ResumenPedido = ({ order }) => {

  return (
    <Fragment>
        <div>
          <label>Cliente:</label>
          <input type= 'text'></input>
          <br/>
          <label> # Pedido </label>
          <hr/>
        </div>
      <div className="container-pedido overflow-auto row row-cols-1 row-cols-md-2 g-4  overflow-auto" >
        {order.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>           
            <p>{item.price}</p>
          </div>
        ))}
        </div>
      {console.log('desde ResumenPedido', order)}

    </Fragment>
  )
}
export { ResumenPedido }