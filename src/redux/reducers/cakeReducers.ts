import { CakeAction } from "../../interface"
import { BUY_CAKE } from "../types"

const initialCakeState = {
  numberOfCakes:12
}
export const cakeReducer =(state= initialCakeState, action:CakeAction)=>{
  switch(action.type){
    case BUY_CAKE:{
      return {...state, numberOfCakes: state.numberOfCakes -1}
    }
    default: return state
  }
}