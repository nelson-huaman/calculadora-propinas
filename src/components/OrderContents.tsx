import type { OrderItemType } from "../types"
import { formatCurrency } from "../helpers";
import type { Dispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";

type OrderContentsProps = {
   order: OrderItemType[],
   dispatch: Dispatch<OrderActions>
}

function OrderContents({order, dispatch}: OrderContentsProps) {

   return (
      <div>
         <h2 className="text-4xl font-bold">Orden</h2>
         <div className="spcae-y-3 mt-5">
            {order.map(item => (
               <div key={item.id} className="flex justify-between items-center gap-2 border-t border-gray-400 p-3 last-of-type:border-b">
                  <div>
                     <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                     <p className="font-bold">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                  </div>
                  <button
                     className="bg-red-700 h-8 w-8 rounded-full text-white flex items-center justify-center font-black"
                     onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}
                  >X</button>

               </div>
            ))}
         </div>
      </div>
   )
}

export default OrderContents