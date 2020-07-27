export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    case "ADD_TO_BASKET":
      // LOGIC OF ADDING ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Logic to remove form basket
      let newBasket = [...state.basket];
    //   
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      if(index >= 0) {
        //   item exists in basket remove that
        newBasket.splice(index, 1);
      } else {
          console.warn(`Cant remove the product from the cart`)
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
