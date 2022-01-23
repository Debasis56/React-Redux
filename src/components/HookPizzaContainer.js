import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyPizza } from '../redux'

function HookPizzaContainer() {
    const numofPizzas = useSelector(state => state.pizzas.numOfPizzas)
    const dispatch = useDispatch()
    return (
    <div className='container mt-5'>
        <h2>Number of Pizzas - {numofPizzas}</h2>
        <button className='mt-3' onClick={()=> dispatch(buyPizza())}>Buy Pizza</button>
  
    </div>
    )
  }
export default HookPizzaContainer


