import Banner from "./Banner";
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
const Home = () => {
  const { products } = useSelector((state) => state.productReducer);
  console.log(products);
  return (
    <div>
      <Banner />

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="product">
                <div className="product__img">
                  <img src={`/images/${product.image}`} />
                </div>

                <div className="product__name">{product.name}</div>

                <div className="row product__prices">
                  <div className="col-6">
                    <div className="product__price">
                      <span className="actualPrice">
                        {currencyFormatter.format(product.price, {
                          code: "USD",
                        })}
                      </span>{" "}
                      <span className="discount">{product.discount}%</span>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="product__discount__price">
                      {currencyFormatter.format(product.discountPrice, {
                        code: "USD",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
