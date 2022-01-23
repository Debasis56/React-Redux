import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
  <div className='container mt-5'>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button className='mt-3' onClick={props.buyCake}>Buy Cake</button>

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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (CakeContainer);
