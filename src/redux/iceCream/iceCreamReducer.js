import { BUY_ICECREAM } from "./iceCreamTypes";

const iceCreamState = {
  numOfIceCreams: 20
};

const iceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
    default:
        return state
  }
}
export default iceCreamReducer
