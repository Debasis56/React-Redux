import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setnumber] = useState(1);
  return (
  <div className='container mt-5'>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input onChange={(e)=>setnumber(e.target.value)} value={number} type="text"></input>
      <button className='mt-3' onClick={()=>props.buyCake(number)}>Buy {number} Cakes</button>

  </div>
  )
}
const mapStatetoProps = state => {
    return{
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (NewCakeContainer);
