import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);
  console.log(product);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mt-100">
      <div className="row">
        {/* Image section */}
        <div className="col-6">
          <div className="details__image">
            <img src={`/images/${product.image}`} alt="product" />
          </div>
        </div>
        {/* DETIL SECTION */}

        <div className="col-6">
          <div className="details__name">{product.name}</div>
          <div className="details__prices">
            <span className="details__actual">
              {currencyFormatter.format(product.price, { code: "USD" })}
            </span>
            <span className="details__discount">
              {currencyFormatter.format(product.discountPrice, { code: "USD" })}
            </span>
          </div>

          <div className="details__info">
            <div className="details__incDec">
              <span className="dec" onClick={decQuantity}>
                <BsDash />
              </span>
              <span className="quantity">{quantity}</span>
              <span className="inc" onClick={() => setQuantity(quantity + 1)}>
                <BsPlus />
              </span>
              <button
                className="btn-default"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { product, quantity },
                  })
                }
              >
                add to cart
              </button>
            </div>
          </div>

          <div className="details__p">
            <h4>Details</h4>
            {product.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
