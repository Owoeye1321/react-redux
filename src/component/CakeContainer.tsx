import react from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/actions/cakeActions'
const CakeConTainer=(props:any)=>{
  return (<>
  <div>
    <h1>Number of cakes - {props.numberOfCakes}</h1>
    <button  onClick={()=>props.buyCake()}>Buy Cake</button>
  </div>
  </>)
}
const mapStateToProps = (state:any) =>{
  return {
    numberOfCakes:state.cake.numberOfCakes
  }
}
const mapDispatchToProps = (dispatch:any)=>{
return {
  buyCake: ()=>{ dispatch(buyCake())}
}
}
export default connect(mapStateToProps, mapDispatchToProps) (CakeConTainer)