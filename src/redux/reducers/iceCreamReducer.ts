import { IceCreamAction } from "../../interface"
import { BUY_ICE_CREAM } from "../types"

const initialIceCreamState = {
  numberOfIceCream:12
}
export const iceCreamReducer =(state= initialIceCreamState, action:IceCreamAction)=>{
  switch(action.type){
    case BUY_ICE_CREAM:{
      return {...state, numberOfIceCream: state.numberOfIceCream -1}
    }
    default: return state
  }
}