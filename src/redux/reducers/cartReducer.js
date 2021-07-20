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

    case "INC":
      findPro = state.products.find((product) => product.id === action.payload);
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      findPro.quantity += 1;
      state.products[index] = findPro;
      const Tprice = state.totalPrice + findPro.discountPrice;
      const Tquantities = state.totalQuantity + 1;
      localStorage.setItem("Tprice", Tprice);
      localStorage.setItem("Tquantity", Tquantities);
      return {
        ...state,
        totalPrice: state.totalPrice + findPro.discountPrice,
        totalQuantity: state.totalQuantity + 1,
      };

    case "DEC":
      findPro = state.products.find((product) => product.id === action.payload);
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.products[index] = findPro;
        const Tprice = state.totalPrice - findPro.discountPrice;
        const Tquantities = state.totalQuantity - 1;
        localStorage.setItem("Tprice", Tprice);
        localStorage.setItem("Tquantity", Tquantities);
        return {
          ...state,
          totalPrice: state.totalPrice - findPro.discountPrice,
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
        return state;
      }

    case "REMOVE":
      findPro = state.products.find((product) => product.id === action.payload);
      const filtered = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("product", JSON.stringify(filtered));
      const Tp = state.totalPrice - findPro.discountPrice * findPro.quantity;
      const Tq = state.totalQuantitty - findPro.quantity;
      localStorage.setItem("Tprice", Tp);
      localStorage.setItem("Tquantity", Tq);
      return {
        ...state,
        products: filtered,
        totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity,
        totalQuantity: state.totalQuantity - findPro.quantity,
      };

    default:
      return state;
  }
};

export default cartReducer;
