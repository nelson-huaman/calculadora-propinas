import type { Dispatch } from "react"
import type { MenuItemType } from "../types"
import type { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
   item: MenuItemType,
   dispatch: Dispatch<OrderActions>
}

function MenuItem({item, dispatch}: MenuItemProps) {
   return (
      <button
         className="border-2 border-teal-600 hover:bg-teal-200 w-full p-3 rounded-lg flex justify-between items-center gap-2"
         onClick={() => dispatch({type: 'add-item', payload: {item}})}
      >
         <p>{item.name}</p>
         <p className="font-bold">${item.price}</p>
      </button>
   )
}

export default MenuItem