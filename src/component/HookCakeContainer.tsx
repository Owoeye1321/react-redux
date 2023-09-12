import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/actions/cakeActions'
const HookCakeConTainer=()=>{
  const numberOfCakes = useSelector((state:any)=>{ return state.cake.numberOfCakes})
   const dispatch = useDispatch()
  return (<>
  <div>
    <h1>Number of cakes - {numberOfCakes}</h1>
    <button onClick={()=> dispatch(buyCake())} >Buy Cake</button>
  </div>
  </>)
}


export default HookCakeConTainer

