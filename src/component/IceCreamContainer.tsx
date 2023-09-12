import react from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/actions/iceCreamAction'
const IceCreamContainer=(props:any)=>{
  return (<>
  <div>
    <h1>Number of Ice Creams- {props.numberOfIceCream}</h1>
    <button  onClick={()=>props.buyIceCream()}>Buy Cake</button>
  </div>
  </>)
}
const mapStateToProps = (state:any) =>{
  return {
    numberOfIceCream:state.iceCream.numberOfIceCream
  }
}
const mapDispatchToProps = (dispatch:any)=>{
return {
  buyIceCream: ()=>{ dispatch(buyIceCream())}
}
}
export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)