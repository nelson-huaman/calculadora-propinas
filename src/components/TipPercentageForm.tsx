import type { Dispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
   {
      id: 'tip-10',
      value: .10,
      label: '10%'
   },
   {
      id: 'tip-20',
      value: .20,
      label: '20%'
   },
   {
      id: 'tip-50',
      value: .50,
      label: '50%'
   },
]

type TipPercentageFormProps = {
   dispatch: Dispatch<OrderActions>
   tip: number
}

function TipPercentageForm({dispatch, tip}: TipPercentageFormProps) {
   return (
      <div>
         <h3 className="font-bold text-2xl">Propina</h3>
         <form>
            {tipOptions.map(tipOption => (
               <div key={tipOption.id} className="flex items-center gap-2">
                  <input
                     type="radio"
                     name="tipOption"
                     id={tipOption.id}
                     value={tipOption.value}
                     className="h-5 w-5"
                     onChange={e => dispatch({type: 'add-tip', payload: {value: +e.target.value}})}
                     checked={tip === tipOption.value}
                  />
                  <label htmlFor={tipOption.id} className="text-lg">{tipOption.label}</label>
               </div>
            ))}
         </form>
      </div>
   )
}

export default TipPercentageForm