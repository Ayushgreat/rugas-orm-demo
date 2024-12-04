import React from "react";
import { formatePrize } from "../../utils/helpers";
import { Link } from "react-router-dom";

const CartItem = ({ item, onRemove, onDecrease, onIncrease }) => {
  const { id, title, price, images, quantity } = item;
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 overflow-hidden">
      <div className="flex items-center justify-between">
        <img
          src={images[0]}
          alt={`${title}-image`}
          className="w-20 h-20 object-contain rounded-md"
        />
        <div className="ml-4 flex-grow min-w-0">
          <Link to={`/productDetails/${id}`}>
            <h2 className="text-xl font-semibold text-green-300 underline hover:text-green-500 truncate">
              {title}
            </h2>
          </Link>
          <p className="text-gray-500">{formatePrize(price)}</p>
        </div>
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Remove
        </button>
      </div>

      {/* ----------------------------- Quantity controls ----------------------------- */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={onDecrease}
            className="bg-gray-300 text-gray-800 px-3 py-1 rounded-l hover:bg-gray-400"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={onIncrease}
            className="bg-gray-300 text-gray-800 px-3 py-1 rounded-r hover:bg-gray-400"
          >
            +
          </button>
        </div>
        <p className="font-semibold text-right">{formatePrize(price * quantity)}</p>
      </div>
    </div>
  );
};

export default CartItem;
