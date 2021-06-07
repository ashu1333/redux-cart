import currencyFormatter from "currency-formatter";
import { useSelector, useDispatch } from "react-redux";
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
const Cart = () => {
  const dispatch = useDispatch();
  const { products, totalQuantity, totalPrice } = useSelector(
    (state) => state.cartReducer
  );
  return (
    <div className="cart">
      <div className="container">
        <h3>Your cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>

                {products.map((product) => (
                  <div className="row v-align" key={product.id}>
                    <div className="col-2">
                      <div className="cart__image">
                        <img src={`/images/${product.image}`} aly="image" />
                      </div>
                    </div>

                    <div className="col-2">
                      <div className="cart__name">{product.name}</div>
                    </div>
                    <div className="col-2">
                      <div className="cart__price">
                        {currencyFormatter.format(product.discountPrice, {
                          code: "USD",
                        })}{" "}
                      </div>
                    </div>

                    <div className="col-2">
                      <div
                        className="details__info cart__incDec"
                        style={{ marginRight: "30px" }}
                      >
                        <div
                          className="details__incDe"
                          style={{ display: "flex" }}
                        >
                          <span
                            className="dec"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product.id })
                            }
                          >
                            <BsDash />
                          </span>
                          <span className="quantity">{product.quantity}</span>
                          <span
                            className="inc"
                            onClick={() =>
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__total text-center">
                        {currencyFormatter.format(
                          product.discountPrice * product.quantity,
                          { code: "USD" }
                        )}
                      </div>
                    </div>
                    <div className="col-2">
                      <div
                        className="cart__remove"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
                      >
                        <BsReverseBackspaceReverse
                          style={{ color: "crimson" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-3 summary-col">
                <div className="summary">
                  <div className="summary__heading">Summary</div>

                  <div className="summary__details">
                    <div className="row mb-10">
                      <div className="col-6">Total items:</div>
                      <div className="col-6">{totalQuantity}</div>
                    </div>

                    <div className="row mb-10">
                      <div className="col-6">Total price:</div>
                      <div className="col-6">
                        {currencyFormatter.format(totalPrice, { code: "USD" })}
                      </div>
                    </div>

                    <button type="submit" className="checkout">
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "YOUR CART IS EMPTY"
        )}
      </div>
    </div>
  );
};

export default Cart;
