import {combineReducer, combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import pizzaReducer from './pizzas/pizzaReducer'
import reducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pizzas: pizzaReducer,
    user: reducer
})

export default rootReducer