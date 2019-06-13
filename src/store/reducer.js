import actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SAY_HELLO:
      console.log("say Hello action works");
      return state;
    default:
      return state;
  }
};

export default reducer;
