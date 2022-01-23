import React from 'react'
import { connect } from 'react-redux'
import {buyiceCream} from '../redux'

function IceCreamContainer(props) {
  return (
  <div className='container mt-5'>
      <h2>Number of ICE CREAMS - {props.numOfIceCreams}</h2>
      <button className='mt-3' onClick={props.buyiceCream}>Buy Ice Cream</button>

  </div>
  )
}
const mapStatetoProps = state => {
    return{
        numOfIceCreams : state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyiceCream: () => dispatch(buyiceCream())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (IceCreamContainer);
