import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numofCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
    <div className='container mt-5'>
        <h2>Number of Cakes - {numofCakes}</h2>
        <button className='mt-3' onClick={()=> dispatch(buyCake())}>Buy Cake</button>
  
    </div>
    )
  }
export default HooksCakeContainer


