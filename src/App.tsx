import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {

   const [ state, dispatch ] = useReducer(orderReducer, initialState)

   return (
      <>
         <header className="bg-teal-700 p-4">
            <h1 className="text-center text-4xl font-bold text-white">Calculadora de Propinas - Consumos</h1>
         </header>
         <main className="max-w-7xl mx-auto p-4 grid md:grid-cols-2 gap-4">
            <div className="p-5">
               <h2 className="text-4xl font-bold">Menú</h2>
               <div className="space-y-3 mt-5">
                  {menuItems.map(item => (
                     <MenuItem 
                        key={item.id}
                        item={item}
                        dispatch={dispatch}
                     />
                  ))}
               </div>
            </div>
            <div className="boder border-dashed border-slate-300 p-5 rounded-lg space-y-5">
               {state.order.length ? (
                  <>
                     <OrderContents
                        order={state.order}
                        dispatch={dispatch}
                     />
                     <TipPercentageForm
                        dispatch={dispatch}
                        tip={state.tip}
                     />
                     <OrderTotals
                        order={state.order}
                        tip={state.tip}
                        dispatch={dispatch}
                     />
                  </>
               ) : (
                  <p className="text-center text-2xl font-bold">No hay productos en la orden</p>
               )}
            </div>
         </main>
      </>
   )
}

export default App