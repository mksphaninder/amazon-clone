export const initialState = {
  basket: [
    {
      id: "134141414",
      title: "Apple ipad pro",
      price: 598.98,
      rating: 4,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583552356577",
    },
    {
        id: "134141414",
        title: "Apple ipad pro",
        price: 598.98,
        rating: 4,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583552356577",
      },
      {
        id: "134141414",
        title: "Apple ipad pro",
        price: 598.98,
        rating: 4,
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583552356577",
      },
  ],
  user: null,
};

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      // LOGIC OF ADDING ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Logic to remove form basket
      let newBasket = [...state.basket];

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
