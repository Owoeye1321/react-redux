import react from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import { buyCake } from '../redux/actions/cakeActions'
const BuyBulkContainer=(props:any)=>{
  const [cakeBaught, setCakeBaught]= useState(1)

  return (<>
  <div>
    <h1>Number of cakes - {props.numberOfCakes}</h1>
   <input value={cakeBaught} type={'number'} onChange={(e:any)=> setCakeBaught(e.target.value)}/> <button  onClick={()=>props.buyCake(cakeBaught)}>Buy Cake</button>
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
  buyCake: (cakeBaught:any)=>{ dispatch(buyCake(cakeBaught))}
}
}
export default connect(mapStateToProps, mapDispatchToProps) (BuyBulkContainer)