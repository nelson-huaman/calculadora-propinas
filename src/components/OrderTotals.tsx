import { useMemo, type Dispatch } from "react"
import type { OrderItemType } from "../types"
import { formatCurrency } from "../helpers"
import type { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
   order: OrderItemType[],
   tip: number,
   dispatch: Dispatch<OrderActions>
}

function OrderTotals({order, tip, dispatch} : OrderTotalsProps) {

   const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

   const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
   const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

   return (
      <>
         <div className="space-y-3">
            <h2 className="text-2xl font-bold">Totales y Propinas</h2>
            <p>
               Sub Total: {''}
               <span className="font-black">{ formatCurrency(subTotalAmount) }</span>
            </p>
            <p>
               Propinas: {''}
               <span className="font-black">{ formatCurrency(tipAmount) }</span>
            </p>
            <p>
               Total a Pagar: {''}
               <span className="font-black">{ formatCurrency(totalAmount) }</span>
            </p>
         </div>
         <button
            className="w-full bg-black p-3 uppercase text-white font-bold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-20"
            disabled={totalAmount === 0}
            onClick={() => dispatch({type: 'place-order'})}
         >Guardar Orden</button>
      </>
   )
}

export default OrderTotals