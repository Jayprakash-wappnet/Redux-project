const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  //ACTION-CREATORS
  return {
    //ACTION
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restokeCake(qty = 1) {
  //ACTION-CREATORS
  return {
    //ACTION
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
    //ACTION-CREATORS
    return {
      //ACTION
      type: ICECREAM_ORDERED,
      payload: qty,
    };
  }

  function restockIcecream(qty = 1) {
    //ACTION-CREATORS
    return {
      //ACTION
      type: ICECREAM_RESTOCKED,
      payload: qty,
    };
  }

// initial state
const initialState = {
  numberOfCake: 10,
  numberOfIceCreams: 20
};

// Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCake: state.numberOfCake + action.payload,
      };
      case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

// store

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

// Bind action creators

const actions = redux.bindActionCreators(
  { orderCake, restokeCake,orderIcecream, restockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokeCake(3);
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(3);

unsubscribe();
