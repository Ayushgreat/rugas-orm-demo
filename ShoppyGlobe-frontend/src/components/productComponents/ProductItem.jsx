import { formatePrize } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="relative group">
        <img
          className="w-full h-60 object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110"
          src={product.images[0]}
          alt={`${product.title}-image`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <Link to={`/productDetails/${product.id}`}>
          <h2 className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-300">
            {product.title}
          </h2>
        </Link>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">
            {formatePrize(product.price)}
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleAddToCart}
              className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white text-sm font-semibold uppercase rounded-full shadow-md hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-full py-1 px-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="text-xl font-semibold text-gray-700 disabled:opacity-50"
              >
                -
              </button>
              <span className="text-lg font-medium text-gray-800">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-xl font-semibold text-gray-700"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
