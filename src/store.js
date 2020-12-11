import { createStore } from "redux";

const INITIAL_STATE = {
   score: 0,
};

function user(state = INITIAL_STATE, action) {
   switch (action.type) {
      case "INCREASE_SCORE":
         console.log("increasing");
         return { score: state.score + 1 };
      case "DECREASE_SCORE":
         console.log("decreasing");
         return { score: state.score - 1 };
      default:
         return state;
   }
}

const store = createStore(user);

export default store;
