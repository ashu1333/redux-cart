const initialState = {
  totalPrice:
    localStorage.getItem("Tprice") != null ? localStorage.getItem("Tprice") : 0,

  totalQuantity:
    localStorage.getItem("Tquantity") != null
      ? localStorage.getItem("Tquantity")
      : 0,

  products:
    localStorage.getItem("product") != null
      ? JSON.parse(localStorage.getItem("product"))
      : [],
};
const cartReducer = (state = initialState, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      const check = state.products.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const Tprice = state.totalPrice + product.discountPrice * quantity;
        const Tquantities = state.totalQuantity + quantity;

        localStorage.setItem("Tprice", Tprice);
        localStorage.setItem("Tquantity", Tquantities);
        localStorage.setItem(
          "product",
          JSON.stringify([...state.products, product])
        );
        product.quantity = quantity;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: Tprice,
          totalQuantity: Tquantities,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
