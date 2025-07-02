import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

const Header = () => {
  const totalCarts = useSelector(selectCartItems);

  return (
    <>
      <header className="flex items-center justify-between py-6 px-8 border-b sticky top-0 bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-600 bg-cover bg-center text-white">
        {/* Logo */}
        <Logo />
        
        {/* Cart Icon with notification */}
        <Link to={`/cart`}>
          <div className="relative group">
            <span className="text-3xl">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            {/* Cart Item Count Bubble */}
            {totalCarts.length !== 0 && (
              <span
                className="absolute right-0 top-0 bg-red-600 min-w-7 h-7 flex items-center justify-center rounded-full text-white text-xs font-bold group-hover:scale-105 transition-all duration-300"
              >
                {totalCarts.length}
              </span>
            )}
          </div>
        </Link>
      </header>
    </>
  );
};

export default Header;
