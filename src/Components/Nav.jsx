import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Nav = () => {
  const { cartReducer } = useSelector((state) => state);
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="nav__left">
            <Link to="/">
              <img src="/images/logo.webp" alt="logo" />
            </Link>
          </div>
          <div className="nav__right">
            <Link to="/cart">
              <div className="basket">
                <BsFillBagFill className="cart-icon" />
                <span>{cartReducer.totalQuantity}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
